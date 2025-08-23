// src/components/sections/Hero.tsx
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl md:text-9xl" style={{ letterSpacing: '-0.09em' }}>Aryan Singh Shaktawat</h1>
      <p className="mt-4 text-2xl md:text-3xl" style={{ color: 'var(--dark-text-200)' }}>
        Cybersecurity Enthusiast & Developer
      </p>
    </section>
  );
};

export default Hero;
