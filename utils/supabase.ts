import { createClient } from '@supabase/supabase-js';

// Check if Supabase environment variables are available
export const demoMode = !process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a conditional supabase client
let supabase: ReturnType<typeof createClient>;

// Only create the client if both URL and key are available and not in demo mode
if (!demoMode && supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Failed to create Supabase client:', error);
    // Create a dummy client that will be replaced by demo mode
    supabase = {} as ReturnType<typeof createClient>;
  }
} else {
  // Create a dummy client that will be replaced by demo mode
  supabase = {} as ReturnType<typeof createClient>;
}

export { supabase };

// Helper function to ensure the bucket exists
export async function ensureBucketExists(bucketName: string) {
  try {
    // Check if the bucket exists
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
    
    // If the bucket doesn't exist, create it
    if (!bucketExists) {
      await supabase.storage.createBucket(bucketName, {
        public: true, // Make the bucket public
        fileSizeLimit: 5 * 1024 * 1024, // 5MB limit
      });
    }
    
    return true;
  } catch (error) {
    console.error('Error ensuring bucket exists:', error);
    return false;
  }
}

// Helper function to ensure the table exists
export async function ensureTableExists() {
  try {
    // Check if the table exists by trying to select from it
    const { error } = await supabase
      .from('photo_wall')
      .select('id')
      .limit(1);
    
    // If there's an error (table doesn't exist), create it
    if (error && error.code === '42P01') { // PostgreSQL error code for undefined_table
      await supabase.rpc('create_photo_wall_table');
    }
    
    return true;
  } catch (error) {
    console.error('Error ensuring table exists:', error);
    return false;
  }
}
