import { useState, useEffect } from 'react';
import { supabase, demoMode as forceDemoMode } from '@/utils/supabase';
import { Photo } from '@/components/MemoriesPage';
import { demoPhotos } from '@/utils/demoData';
import { useDemoMode } from '@/context/DemoModeContext';
import toast from 'react-hot-toast';

export function useSupabase() {
  const { isDemoMode } = useDemoMode();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Initialize Supabase resources or load demo data
  useEffect(() => {
    const initializeSupabase = async () => {
      try {
        setIsLoading(true);
        
        // If in forced demo mode or user selected demo mode, use sample data
        if (forceDemoMode || isDemoMode) {
          // In demo mode, use the sample data
          setPhotos(demoPhotos);
          setIsInitialized(true);
        } else {
          // In live mode, initialize Supabase
          // Call the initialization API endpoint
          const response = await fetch('/api/init-supabase');
          if (!response.ok) {
            throw new Error('Failed to initialize Supabase resources');
          }
          
          setIsInitialized(true);
          
          // Fetch photos after initialization
          await fetchPhotos();
        }
      } catch (err) {
        console.error('Error initializing:', err);
        setError('Failed to initialize. Please try again later.');
        
        // Fall back to demo mode if there's an error
        if (!isDemoMode) {
          setPhotos(demoPhotos);
          toast.error('Error connecting to Supabase. Falling back to demo mode.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    initializeSupabase();
  }, [isDemoMode]);

  // Fetch photos from Supabase or return demo data
  const fetchPhotos = async () => {
    // If in demo mode, just use the demo photos
    if (forceDemoMode || isDemoMode) {
      setPhotos(demoPhotos);
      return;
    }
    
    try {
      const { data, error: fetchError } = await supabase
        .from('photo_wall')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      
      // Ensure the data matches the Photo type
      const typedData: Photo[] = data?.map(item => ({
        id: String(item.id),
        url: String(item.url),
        caption: String(item.caption),
        name: item.name ? String(item.name) : undefined,
        created_at: String(item.created_at)
      })) || [];
      
      setPhotos(typedData);
      setError(null);
    } catch (err) {
      console.error('Error fetching photos:', err);
      setError('Failed to load photos');
      
      // Fall back to demo data if there's an error
      setPhotos(demoPhotos);
    }
  };

  // Upload a photo (or show demo mode message)
  const uploadPhoto = async (file: File, caption: string, name?: string) => {
    // If in forced demo mode or user selected demo mode, don't actually upload
    if (forceDemoMode || isDemoMode) {
      return { success: false, error: 'Demo mode – uploads disabled' };
    }
    
    try {
      // Generate a unique file name
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `${fileName}`;
      
      // Upload file to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('trip-photos')
        .upload(filePath, file);
      
      if (uploadError) throw uploadError;
      
      // Get public URL for the uploaded file
      const { data: publicUrlData } = supabase.storage
        .from('trip-photos')
        .getPublicUrl(filePath);
      
      const url = publicUrlData.publicUrl;
      
      // Save record to database
      const { error: insertError } = await supabase
        .from('photo_wall')
        .insert([
          {
            url,
            caption: caption.trim(),
            name: name?.trim() || null,
          },
        ]);
      
      if (insertError) throw insertError;
      
      // Refresh photos
      await fetchPhotos();
      
      return { success: true };
    } catch (err) {
      console.error('Error uploading photo:', err);
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to upload photo' 
      };
    }
  };

  return {
    isInitialized,
    isLoading,
    photos,
    error,
    fetchPhotos,
    uploadPhoto
  };
}
