import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

// This API route initializes the Supabase storage bucket and table
export async function GET() {
  try {
    // Create the bucket if it doesn't exist
    const { data: buckets, error: bucketError } = await supabase.storage.listBuckets();
    
    if (bucketError) {
      throw bucketError;
    }
    
    const bucketExists = buckets.some(bucket => bucket.name === 'trip-photos');
    
    if (!bucketExists) {
      const { error } = await supabase.storage.createBucket('trip-photos', {
        public: true,
        fileSizeLimit: 5 * 1024 * 1024, // 5MB limit
      });
      
      if (error) {
        throw error;
      }
    }
    
    // Create the table if it doesn't exist
    let error = null;
    try {
      const res = await supabase.rpc('create_photo_wall_table', {}, { head: true });
      error = res.error;
    } catch {
      // If the RPC doesn't exist, create the table directly with SQL
      await supabase.from('photo_wall').select('id').limit(1);
    }
    
    // If the table doesn't exist, create it
    if (error && error.code === '42P01') { // PostgreSQL error code for undefined_table
      await supabase.sql(`
        CREATE TABLE IF NOT EXISTS public.photo_wall (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          url TEXT NOT NULL,
          caption TEXT NOT NULL,
          name TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `);
    }
    
    return NextResponse.json({ success: true, message: 'Supabase resources initialized' });
  } catch (error) {
    console.error('Error initializing Supabase resources:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to initialize Supabase resources', error },
      { status: 500 }
    );
  }
}
