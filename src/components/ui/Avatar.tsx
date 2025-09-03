"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  src?: string;
  alt?: string;
  className?: string;
};

export default function Avatar({ src = '/profile.webp', alt = 'avatar', className }: Props) {
  const [current, setCurrent] = useState<string>('/darklogo.png');

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const candidates = [src, '/profile.webp', '/profile.png', '/profile.jpg', '/darklogo.png'];
        for (const url of candidates) {
          try {
            const res = await fetch(url, { method: 'HEAD' });
            if (!active) return;
            if (res.ok) {
              setCurrent(url);
              return;
            }
          } catch {
            // ignore
          }
        }
      } catch {
        if (active) setCurrent('/darklogo.png');
      }
    })();
    return () => {
      active = false;
    };
  }, [src]);

  return (
    <div className={className}>
      <Image src={current} alt={alt} width={96} height={96} className="rounded-full object-cover" />
    </div>
  );
}
