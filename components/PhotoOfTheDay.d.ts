import { FC } from 'react';
import { Photo } from './MemoriesPage';

interface PhotoOfTheDayProps {
  photo: Photo | null;
}

declare const PhotoOfTheDay: FC<PhotoOfTheDayProps>;

export default PhotoOfTheDay;
