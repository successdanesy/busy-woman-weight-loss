export default function NotDiscipline() {
  return (
    <section
      className="max-w-[1160px] mx-auto"
      style={{ padding: '0 clamp(16px,3vw,40px) clamp(64px,10vw,110px)' }}
    >
      <div
        className="mx-auto rounded-panel flex flex-col items-center text-center gap-5"
        style={{
          maxWidth: 760,
          background: '#eef7ea',
          padding: 'clamp(48px,8vw,72px) clamp(28px,6vw,56px)',
        }}
      >
        <span className="text-[48px] font-bold" style={{ lineHeight: 0.5, color: '#b6e6a0' }}>
          &ldquo;
        </span>
        <p
          className="m-0"
          style={{
            fontSize: 'clamp(24px,3vw,30px)',
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
            textWrap: 'balance',
            color: '#123a2f',
          }}
        >
          It&rsquo;s not always discipline. The advice you&rsquo;ve been following was never designed for your
          lifestyle.
        </p>
        <p className="m-0 text-[17px]" style={{ lineHeight: 1.6, color: '#5b6b63', maxWidth: 480 }}>
          Most plans expect hours to cook and daily gym time. You need something that works even when your
          schedule doesn&rsquo;t.
        </p>
      </div>
    </section>
  )
}
