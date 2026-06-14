interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <div className="relative bg-[#0F1E35] py-20 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Diagonal stripe */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            #E87722 20px,
            #E87722 21px
          )`,
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-[#E87722]/8 blur-3xl pointer-events-none rounded-full" />

      {/* Orange left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#E87722] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <p className="text-[#E87722] text-sm font-medium uppercase tracking-widest mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-5 h-1 w-16 bg-[#E87722] rounded-full mx-auto" />
      </div>
    </div>
  );
}
