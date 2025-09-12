"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setKey(pathname), [pathname]);
  useEffect(() => setMounted(true), []);

  return (
    <div key={key} className={mounted ? "page-fade" : undefined}>
      {children}
      <style jsx>{`
        .page-fade { opacity: 0; animation: fadeInPage 260ms ease forwards; }
        @keyframes fadeInPage { to { opacity: 1; } }
      `}</style>
    </div>
  );
}
