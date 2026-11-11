export default function Testimonials() {
  return (
    <section
      className="max-w-[1160px] mx-auto flex flex-col gap-10"
      style={{ padding: '0 clamp(16px,3vw,40px) clamp(64px,10vw,110px)' }}
    >
      <h2
        className="m-0 text-center font-light"
        style={{ fontSize: 'clamp(32px,4.4vw,48px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
      >
        What women <span className="font-bold" style={{ color: '#2f3136' }}>are saying</span>
      </h2>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))' }}
      >
        {/* Placeholders. Only fill with real testimonials used with permission, or replace with real product previews. */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-card bg-white border border-border2 flex flex-col justify-between gap-6"
            style={{ minHeight: 200, padding: 28 }}
          >
            <span className="text-[40px] font-bold" style={{ lineHeight: 0.5, color: '#a9c9ea' }}>
              &ldquo;
            </span>
            <span className="text-[15px]" style={{ color: '#8a8d93' }}>
              Real testimonial goes here
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
