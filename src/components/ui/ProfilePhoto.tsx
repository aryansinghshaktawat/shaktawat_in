"use client";
import Image from 'next/image';

export default function ProfilePhoto() {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden">
      <Image src="/profile.webp" width={96} height={96} alt="profile" />
    </div>
  );
}