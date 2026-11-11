const ITEMS = [
  {
    n: '01',
    title: 'Routines that don’t fit your schedule',
    body: 'A two-hour gym routine falls apart the moment meetings run late or the children need you.',
  },
  {
    n: '02',
    title: 'Treating your favourite foods like the enemy',
    body: 'Healthier eating doesn’t mean giving up the meals you grew up on.',
  },
  {
    n: '03',
    title: 'Relying on motivation, not a routine',
    body: 'Motivation fades after a stressful day. You need habits you can return to.',
  },
  {
    n: '04',
    title: 'One difficult day feels like failure',
    body: 'One meal doesn’t erase your progress. Keep going instead of starting over.',
  },
]

export default function WhyDifficult() {
  return (
    <section className="max-w-[1160px] mx-auto" style={{ padding: '0 clamp(16px,3vw,40px) clamp(64px,10vw,110px)' }}>
      <div
        className="border-t border-border1 flex flex-col gap-11"
        style={{ paddingTop: 'clamp(48px,7vw,80px)' }}
      >
        <h2
          className="m-0 font-light"
          style={{ fontSize: 'clamp(32px,4.4vw,48px)', lineHeight: 1.08, letterSpacing: '-0.03em', textWrap: 'balance' }}
        >
          Why the usual approach <span className="font-bold" style={{ color: '#2f3136' }}>keeps becoming difficult</span>
        </h2>
        <div
          className="grid gap-x-14 gap-y-9"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))' }}
        >
          {ITEMS.map((item) => (
            <div key={item.n} className="flex flex-col gap-2.5">
              <span className="text-[14px] font-bold" style={{ color: '#4d7aa6' }}>
                {item.n}
              </span>
              <h3 className="m-0 text-[19px] font-bold" style={{ lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <p className="m-0 text-[15px]" style={{ lineHeight: 1.65, color: '#5f6268' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
