'use client';

import { useState } from &apos;react';
import Image, { ImageProps } from 'next/image';

interface ImageFallbackProps extends ImageProps {
  fallbackSrc: string;
}

const ImageFallback = ({
  src,
  fallbackSrc,
  alt,
  ...rest
}: ImageFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  return (
    <Image
      {...rest}
      src={isError ? fallbackSrc : imgSrc}
      alt={alt}
      onError={() => {
        setIsError(true);
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageFallback;
