export const PortfolioBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background */}
      <div className="absolute inset-0 portfolio-gradient" />

      {/* Light mode grid */}
      <div className="absolute inset-0 light-grid opacity-70 dark:opacity-0 transition-opacity duration-500" />

      {/* Dark mode blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-0 dark:opacity-100 transition-opacity duration-500" />

      {/* Decorative blush circle */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float" />

      {/* Decorative lavender circle */}
      <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-purple-400/10 blur-3xl animate-float" />

      {/* Small technical accent */}
      <div className="hidden dark:block absolute bottom-16 left-10 text-primary/15 font-mono text-xs tracking-[0.3em] rotate-90 origin-left">
        DESIGN • RESEARCH • BUILD
      </div>

      {/* Small creative accent */}
      <div className="absolute top-24 right-10 text-primary/10 text-6xl font-serif select-none">
        ✦
      </div>
    </div>
  );
};