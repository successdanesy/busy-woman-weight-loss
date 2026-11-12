const ITEMS = [
  { title: 'Understand what’s in the way', body: 'Office snacks, sugary drinks, skipped meals, stress eating and weekend routines.' },
  { title: 'Change your approach', body: 'Stop treating every meal as a test of discipline. Focus on consistency, not perfection.' },
  { title: 'Build a routine that fits', body: 'Simple morning, afternoon and evening habits that work around your responsibilities.' },
  { title: 'Eat smarter, keep your favourites', body: 'Portions and balanced meals using familiar foods you already enjoy.' },
  { title: 'Handle office temptations', body: 'Birthday cakes, meeting snacks, takeaways and days lunch is bought outside.' },
  { title: 'Make movement routine', body: 'Walking, home workouts, stairs, dancing and strength exercises. No hours at the gym.' },
  { title: 'Understand stress eating', body: 'Notice when you’re reaching for food because you’re overwhelmed, not hungry.' },
  { title: 'Track progress calmly', body: 'Look beyond the scale at habits, energy, sleep and other changes.' },
  { title: 'Stay consistent when life gets busy', body: 'Return to your routine after travel, celebrations, deadlines and surprises.' },
]

export default function SystemSection() {
  return null

  /* eslint-disable no-unreachable
  return (
    <section
      id="system"
      className="max-w-[1000px] mx-auto flex flex-col gap-12"
      style={{ padding: 'clamp(80px,12vw,140px) clamp(20px,4vw,40px) clamp(64px,10vw,110px)' }}
    >
      <div className="flex flex-col items-center text-center gap-3.5">
        <span
          className="text-[13px] font-semibold uppercase"
          style={{ letterSpacing: '.18em', color: '#2f7a5c' }}
        >
          The system
        </span>
        <h2
          className="m-0 text-center font-light"
          style={{ fontSize: 'clamp(32px,4.4vw,48px)', lineHeight: 1.08, letterSpacing: '-0.03em', textWrap: 'balance' }}
        >
          Make weight-loss habits <span style={{ color: '#123a2f' }}>work around your life</span>
        </h2>
        <p className="m-0 text-[17px]" style={{ color: '#5b6b63' }}>
          Inside the guide, you&rsquo;ll work through nine practical areas.
        </p>
      </div>

      <div
        className="grid gap-x-11 gap-y-9"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,270px),1fr))' }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={item.title}
            className="flex gap-4 items-start rounded-card"
            style={{ padding: 20, background: '#eef7ea' }}
          >
            <span
              className="flex-none w-[38px] h-[38px] rounded-full flex items-center justify-center text-[14px] font-bold"
              style={{ background: '#b6e6a0', color: '#0d2a22' }}
            >
              {i + 1}
            </span>
            <div className="flex flex-col gap-1.5" style={{ paddingTop: 7 }}>
              <span className="text-[17px] font-bold">{item.title}</span>
              <span className="text-[15px]" style={{ lineHeight: 1.6, color: '#5b6b63' }}>
                {item.body}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
  */
}
