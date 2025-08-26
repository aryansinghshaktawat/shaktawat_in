"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function Avatar({ src, alt, className }: Props) {
  // Start with a safe, existing placeholder to avoid invalid image requests
  const [current, setCurrent] = useState<string>('/darklogo.png');

  useEffect(() => {
    let active = true;
    // Probe the target image; only switch if it exists
    (async () => {
      try {
        const res = await fetch(src, { method: 'HEAD' });
        if (!active) return;
        if (res.ok) setCurrent(src);
        else setCurrent('/darklogo.png');
      } catch {
        if (active) setCurrent('/darklogo.png');
      }
    })();
    return () => {
      active = false;
    };
  }, [src]);

  return (
    <Image
      src={current}
      alt={alt}
      fill
      className={className}
      onError={() => setCurrent('/darklogo.png')}
    />
  );
}
