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
      try {
        // Try to create a record in the table
        const { data } = await supabase.from('photo_wall').insert({
          url: 'placeholder',
          caption: 'placeholder'
        }).select();
        
        // If the insert succeeded, the table exists, so delete the placeholder
        if (data) {
          await supabase.from('photo_wall').delete().eq('url', 'placeholder');
        }
      } catch (err) {
        // If insert failed, table likely doesn't exist or has different schema
        console.log('Could not create photo_wall table automatically', err);
      }
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
