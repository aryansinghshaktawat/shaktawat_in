// src/components/sections/Contact.tsx
"use client";
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    // Since there's no server, we'll create a mailto link with the form data
    const subject = `Message from ${data.name}`;
    const body = `Hello Aryan,\n\n${data.message}\n\nBest regards,\n${data.name}\n${data.email}`;
    const mailtoLink = `mailto:aryan@shaktawat.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative w-full py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="uppercase font-space-grotesk font-extrabold text-2xl md:text-3xl tracking-tight bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-10" style={{ letterSpacing: '-0.02em' }}>
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {/* Form card */}
          <div className="md:col-span-3">
            <div className="glass hover-lift p-6 md:p-8">
              <div className="mb-6 p-4 glass rounded-lg border border-yellow-400/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                  <span className="font-geist-mono text-sm text-yellow-400 font-semibold">Quick Note</span>
                </div>
                <p className="text-sm text-white/80 font-geist-mono">
                  This form will open your email client with a pre-filled message. For the fastest response, 
                  email me directly at <a href="mailto:aryan@shaktawat.in" className="text-cyan-400 hover:text-white transition-colors underline">aryan@shaktawat.in</a>
                </p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wide text-white/60 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      {...register('name', { required: true })}
                      className="w-full bg-transparent text-white placeholder-white/40 border-b border-white/20 focus:border-cyan-400 outline-none py-2 transition-colors"
                      placeholder="Your name"
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name && <span className="mt-1 block text-[12px] text-red-400">Required</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wide text-white/60 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { required: true })}
                      className="w-full bg-transparent text-white placeholder-white/40 border-b border-white/20 focus:border-cyan-400 outline-none py-2 transition-colors"
                      placeholder="you@example.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && <span className="mt-1 block text-[12px] text-red-400">Required</span>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wide text-white/60 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message', { required: true })}
                      className="w-full bg-transparent text-white placeholder-white/40 border-b border-white/20 focus:border-cyan-400 outline-none py-2 transition-colors resize-none"
                      placeholder="How can I help?"
                      aria-invalid={errors.message ? 'true' : 'false'}
                    />
                    {errors.message && <span className="mt-1 block text-[12px] text-red-400">Required</span>}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium hover:from-cyan-300 hover:to-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-60 transition-all duration-200"
                  >
                    OPEN EMAIL CLIENT
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Alt contacts */}
          <div className="md:col-span-2">
            <div className="glass hover-lift p-4 md:p-6">
              <h3 className="uppercase font-space-grotesk font-bold text-sm tracking-wide text-white">Elsewhere</h3>
              <p className="mt-2 text-xs md:text-[13px] text-white/60 font-geist-mono">Prefer a quick ping? Find me here.</p>
              <div className="mt-4 md:mt-5 grid grid-cols-3 gap-2 md:gap-3">
                <a href="mailto:aryan@shaktawat.in" className="group flex flex-col items-center gap-2 glass p-4 hover-lift transition-colors" aria-label="Email">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v12H4z" strokeWidth="2"/><path d="m22 6-10 7L2 6" strokeWidth="2"/></svg>
                  <span className="text-[11px] font-geist-mono uppercase tracking-wide text-white/60">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/aryansinghshaktawat/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 glass p-4 hover-lift transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.94 7.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM3.75 20.25h6.39V9H3.75v11.25Zm8.61 0h6.39v-6.1c0-3.25-1.74-4.76-4.06-4.76-1.87 0-2.71 1.03-3.18 1.75v-1.5H12.36V20.25Z"/></svg>
                  <span className="text-[11px] font-geist-mono uppercase tracking-wide text-white/60">LinkedIn</span>
                </a>
                <a href="https://github.com/aryansinghshaktawat" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 glass p-4 hover-lift transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.54v-1.9c-3.05.67-3.7-1.31-3.7-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.07-.66.07-.66 1.1.08 1.67 1.13 1.67 1.13.98 1.67 2.57 1.19 3.19.9.1-.71.38-1.19.7-1.47-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.9 0 0 .93-.3 3.06 1.13.88-.25 1.83-.37 2.77-.38.94.01 1.89.13 2.77.38 2.12-1.44 3.06-1.13 3.06-1.13.6 1.5.22 2.62.11 2.9.7.77 1.12 1.76 1.12 2.96 0 4.23-2.57 5.16-5.02 5.43.39.34.74 1.02.74 2.06v3.05c0 .3.19.65.76.54 4.34-1.46 7.49-5.56 7.49-10.41C23.02 5.24 18.27.5 12 .5Z" clipRule="evenodd"/></svg>
                  <span className="text-[11px] font-geist-mono uppercase tracking-wide text-white/60">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
