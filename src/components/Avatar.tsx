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
    // Probe the target image and a few common fallbacks; switch to the first that exists
    (async () => {
      try {
        const unique = (arr: string[]) => Array.from(new Set(arr));
        const candidates = unique([
          src,
          '/profile.webp',
          '/profile.png',
          '/profile.jpg',
          '/profile.jpeg',
        ]);
        for (const url of candidates) {
          try {
            const res = await fetch(url, { method: 'HEAD' });
            if (!active) return;
            if (res.ok) {
              setCurrent(url);
              return;
            }
          } catch {
            // keep trying next candidate
          }
        }
        if (active) setCurrent('/darklogo.png');
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
  sizes="(min-width: 768px) 16rem, 14rem"
  className={className}
  style={{ objectFit: 'cover' }}
      onError={() => setCurrent('/darklogo.png')}
    />
  );
}
