import { Photo } from '@/components/MemoriesPage';

// Sample images for demo mode - using placeholder URLs
export const demoPhotos: Photo[] = [
  {
    id: 'demo-1',
    url: 'https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80',
    caption: 'Beautiful Amish countryside in Lancaster County',
    name: 'Sarah Johnson',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2 hours ago
  },
  {
    id: 'demo-2',
    url: 'https://images.unsplash.com/photo-1605649461784-7e4008ec2b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80',
    caption: 'Amazing performance at Sight & Sound Theatre!',
    name: 'Michael Brown',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString() // 5 hours ago
  },
  {
    id: 'demo-3',
    url: 'https://images.unsplash.com/photo-1531237848811-949804eb1802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80',
    caption: 'Shopping at the Tanger Outlets with friends',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString() // 8 hours ago
  }
];
