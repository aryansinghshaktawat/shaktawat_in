"use client";
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function Avatar({ src, alt, className }: Props) {
  const [current, setCurrent] = useState(src);
  return (
    <Image
      src={current}
      alt={alt}
      fill
      className={className}
      onError={() => setCurrent('/profile.svg')}
    />
  );
}
