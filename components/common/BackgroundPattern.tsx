export function BackgroundPattern() {
  return (
    <>
      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.03]"
      />

      {/* Radial Glow */}
      <div
        aria-hidden="true"
        className="bg-primary/10 absolute top-32 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl"
      />
    </>
  );
}
