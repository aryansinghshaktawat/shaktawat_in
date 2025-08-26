"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    // Trigger remount on route change for CSS fade-in
    setKey(pathname);
  }, [pathname]);

  return (
    <div key={key} className="page-fade">
      {children}
      <style jsx>{`
        .page-fade { opacity: 0; animation: fadeInPage 260ms ease forwards; }
        @keyframes fadeInPage { to { opacity: 1; } }
      `}</style>
    </div>
  );
}
