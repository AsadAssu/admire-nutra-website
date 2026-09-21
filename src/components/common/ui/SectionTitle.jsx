export default function SectionTitle({ eyebrow, children, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <span className={`mb-3 block text-[11px] font-black uppercase tracking-[0.32em] ${
          light ? 'text-orange-300' : 'text-primary'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-black uppercase tracking-tight sm:text-4xl ${
        light ? 'text-white' : 'text-dark'
      }`}>
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-primary" />
    </div>
  );
}
