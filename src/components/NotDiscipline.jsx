export default function NotDiscipline() {
  return (
    <section
      className="max-w-[760px] mx-auto flex flex-col items-center text-center gap-4"
      style={{ padding: '0 clamp(20px,4vw,40px) clamp(64px,10vw,110px)' }}
    >
      <p
        className="m-0 font-light"
        style={{
          fontSize: 'clamp(22px,2.8vw,28px)',
          lineHeight: 1.35,
          letterSpacing: '-0.02em',
          textWrap: 'balance',
        }}
      >
        It&rsquo;s not always discipline. <span className="font-bold">The advice you&rsquo;ve been following was never designed for your lifestyle.</span>
      </p>
      <p className="m-0 text-[17px]" style={{ lineHeight: 1.6, color: '#5f6268', maxWidth: 560 }}>
        Most plans expect hours to cook and daily gym time. You need something that works even when your
        schedule doesn&rsquo;t.
      </p>
    </section>
  )
}
