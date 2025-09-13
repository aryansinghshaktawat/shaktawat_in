import type { Metadata } from 'next';
import Image from 'next/image';
import JsonLd from '@/components/seo/JsonLd';

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aryan Singh Shaktawat",
  "image": {
    "@type": "ImageObject",
    "url": "https://shaktawat.in/profile.webp",
    "caption": "Aryan Singh Shaktawat - Professional Headshot",
    "width": 300,
    "height": 300,
    "contentUrl": "https://shaktawat.in/profile.webp"
  },
  "jobTitle": "Cybersecurity Expert and Full Stack Developer",
  "description": "Professional headshot of Aryan Singh Shaktawat, cybersecurity expert and cybersecurity and forensics developer"
};

export default function ProfilePage() {
  return (
    <>
      <JsonLd data={profileSchema} />
      <div className="min-h-screen animated-bg py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-white mb-6">
              Aryan Singh Shaktawat
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Cybersecurity Expert & Full Stack Developer
            </p>
          </div>
          
          <div className="glass rounded-3xl p-8 max-w-md mx-auto">
            <Image
              src="/profile.webp"
              alt="Aryan Singh Shaktawat - Professional Headshot Photo"
              width={400}
              height={400}
              className="w-full h-auto rounded-2xl object-cover"
              priority={true}
              title="Aryan Singh Shaktawat - Cybersecurity Expert and Full Stack Developer"
            />
            <div className="mt-6 text-center">
              <h2 className="font-space-grotesk text-2xl font-bold text-white mb-4">
                Professional Profile
              </h2>
              <p className="text-white/70">
                B.Tech Computer Science Engineering student specializing in cybersecurity, 
                digital forensics, and cybersecurity and forensics development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Profile & About',
  description: 'Professional profile and headshot of Aryan Singh Shaktawat, cybersecurity expert and cybersecurity and forensics developer.',
  openGraph: {
    title: "Aryan Singh Shaktawat - Professional Profile",
    description: "Professional headshot and profile of cybersecurity expert Aryan Singh Shaktawat.",
    images: [
      {
        url: "/profile.webp",
        width: 400,
        height: 400,
        alt: "Aryan Singh Shaktawat Professional Headshot",
      },
    ],
    type: "profile",
  },
  alternates: {
    canonical: "https://shaktawat.in/profile",
  },
};
