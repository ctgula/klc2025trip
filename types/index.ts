// Photo type definition for the photo wall
export interface Photo {
  id: string;
  url: string;
  caption?: string;
  name?: string;
  created_at: string;
}

// Supabase storage file object type
export interface FileObject {
  id: string;
  name: string;
  bucket_id: string;
  owner: string;
  created_at: string;
  updated_at: string;
  last_accessed_at: string;
  metadata: Record<string, any>;
  size: number;
}

// Result type for async operations
export interface Result<T> {
  success: boolean;
  data?: T;
  error?: string;
}
