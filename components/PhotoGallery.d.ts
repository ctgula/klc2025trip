import { FC } from 'react';
import { Photo } from './MemoriesPage';

interface PhotoGalleryProps {
  photos: Photo[];
}

declare const PhotoGallery: FC<PhotoGalleryProps>;

export default PhotoGallery;
