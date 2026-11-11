export default function Note() {
  return (
    <section
      className="max-w-[680px] mx-auto flex flex-col gap-5"
      style={{ padding: 'clamp(72px,10vw,120px) clamp(20px,4vw,40px) 40px' }}
    >
      <span
        className="text-[13px] font-semibold uppercase"
        style={{ letterSpacing: '.18em', color: '#4d7aa6' }}
      >
        A note from Delipher Ventino
      </span>
      <p className="m-0 text-[19px]" style={{ lineHeight: 1.7 }}>
        I created this guide for the woman who wants to make a change but doesn&rsquo;t want another unrealistic
        plan that becomes impossible to follow after a few days.
      </p>
      <p className="m-0 text-[19px]" style={{ lineHeight: 1.7, color: '#5f6268' }}>
        You deserve an approach that recognises your real life, your responsibilities and the fact that progress
        doesn&rsquo;t have to be perfect.
      </p>
      <p className="m-0 text-[21px] font-bold" style={{ lineHeight: 1.5 }}>
        Start where you are. Build a routine that works for you. Keep going.
      </p>
      <div className="flex flex-col gap-0.5 mt-1.5">
        <span className="text-[16px] font-bold">Delipher Ventino</span>
        <span className="text-[14px]" style={{ color: '#8a8d93' }}>
          The Busy Woman&rsquo;s Weight Loss System
        </span>
      </div>
    </section>
  )
}
