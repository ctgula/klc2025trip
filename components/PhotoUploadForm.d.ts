import { FC } from 'react';

interface PhotoUploadFormProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: () => void;
}

declare const PhotoUploadForm: FC<PhotoUploadFormProps>;

export default PhotoUploadForm;
