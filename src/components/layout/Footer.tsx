// src/components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="border-t border-[#202025] bg-[#121318]">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <div className="flex items-center justify-center gap-4">
          <a href="mailto:hello@shaktawat.in" className="p-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors" aria-label="Email">
            <svg className="w-5 h-5 text-[#e6e6e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v12H4z" strokeWidth="2"/><path d="m22 6-10 7L2 6" strokeWidth="2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/aryan-singh-shaktawat/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5 text-[#e6e6e8]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.94 7.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM3.75 20.25h6.39V9H3.75v11.25Zm8.61 0h6.39v-6.1c0-3.25-1.74-4.76-4.06-4.76-1.87 0-2.71 1.03-3.18 1.75v-1.5H12.36V20.25Z"/></svg>
          </a>
          <a href="https://github.com/aryansinghshaktawat" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors" aria-label="GitHub">
            <svg className="w-5 h-5 text-[#e6e6e8]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.54v-1.9c-3.05.67-3.7-1.31-3.7-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.07-.66.07-.66 1.1.08 1.67 1.13 1.67 1.13.98 1.67 2.57 1.19 3.19.9.1-.71.38-1.19.7-1.47-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.9 0 0 .93-.3 3.06 1.13.88-.25 1.83-.37 2.77-.38.94.01 1.89.13 2.77.38 2.12-1.44 3.06-1.13 3.06-1.13.6 1.5.22 2.62.11 2.9.7.77 1.12 1.76 1.12 2.96 0 4.23-2.57 5.16-5.02 5.43.39.34.74 1.02.74 2.06v3.05c0 .3.19.65.76.54 4.34-1.46 7.49-5.56 7.49-10.41C23.02 5.24 18.27.5 12 .5Z" clipRule="evenodd"/></svg>
          </a>
        </div>
        <p className="mt-4 text-[12px] tracking-wide text-[#9ea0a6] font-mono">© Aryan Singh Shaktawat {new Date().getFullYear()} — All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
