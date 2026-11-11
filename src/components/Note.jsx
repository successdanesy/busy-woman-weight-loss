export default function Note() {
  return (
    <section style={{ background: '#383b42' }}>
      <div
        className="max-w-[680px] mx-auto flex flex-col gap-5 text-white"
        style={{ padding: 'clamp(72px,10vw,120px) clamp(20px,4vw,40px)' }}
      >
        <span
          className="text-[13px] font-semibold uppercase"
          style={{ letterSpacing: '.18em', color: '#9cc4ec' }}
        >
          A note from Delipher Ventino
        </span>
        <p className="m-0 text-[19px] text-white" style={{ lineHeight: 1.7 }}>
          I created this guide for the woman who wants to make a change but doesn&rsquo;t want another unrealistic
          plan that becomes impossible to follow after a few days.
        </p>
        <p className="m-0 text-[19px]" style={{ lineHeight: 1.7, color: '#b9bcc2' }}>
          You deserve an approach that recognises your real life, your responsibilities and the fact that progress
          doesn&rsquo;t have to be perfect.
        </p>
        <p className="m-0 text-[21px] font-bold text-white" style={{ lineHeight: 1.5 }}>
          Start where you are. Build a routine that works for you. Keep going.
        </p>
        <div className="flex flex-col gap-0.5 mt-1.5">
          <span className="text-[16px] font-bold text-white">Delipher Ventino</span>
          <span className="text-[14px]" style={{ color: '#a3a6ab' }}>
            The Busy Woman&rsquo;s Weight Loss System
          </span>
        </div>
      </div>
    </section>
  )
}
