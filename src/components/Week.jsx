const ROWS = [
  { label: 'Morning', text: 'You wake up late and rush to work without breakfast.' },
  { label: 'Lunch', text: 'Whatever you can quickly buy around the office.' },
  { label: '3pm', text: 'Someone brings cake. "I’ll only have a little."' },
  { label: 'Evening', text: 'Traffic. Exhausted. You order food and promise to start again tomorrow.' },
]

export default function Week() {
  return (
    <section
      id="week"
      className="max-w-[1000px] mx-auto flex flex-wrap"
      style={{
        padding: 'clamp(80px,12vw,140px) clamp(20px,4vw,40px) clamp(56px,8vw,90px)',
        gap: 'clamp(28px,6vw,80px)',
      }}
    >
      <div className="flex flex-col gap-4" style={{ flex: '1 1 280px' }}>
        <span
          className="text-[13px] font-semibold uppercase"
          style={{ letterSpacing: '.18em', color: '#4d7aa6' }}
        >
          Be honest with yourself
        </span>
        <h2
          className="m-0 font-light"
          style={{
            fontSize: 'clamp(32px,4.4vw,48px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            textWrap: 'balance',
          }}
        >
          Have you been <span className="font-bold" style={{ color: '#2f3136' }}>here before?</span>
        </h2>
        <p className="m-0 text-[17px]" style={{ lineHeight: 1.6, color: '#5f6268', maxWidth: 340 }}>
          Monday, you&rsquo;re determined. You promise to eat better, drink more water, stop snacking and start
          exercising. You even buy the groceries. Then real life happens.
        </p>
      </div>

      <div className="flex flex-col min-w-0" style={{ flex: '1.4 1 340px' }}>
        {ROWS.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline gap-6 border-b border-border1"
            style={{ padding: '20px 0' }}
          >
            <span className="flex-none text-[13px] font-semibold" style={{ width: 84, color: '#4d7aa6' }}>
              {row.label}
            </span>
            <span className="text-[19px]" style={{ lineHeight: 1.4 }}>
              {row.text}
            </span>
          </div>
        ))}
        <div className="flex items-baseline gap-6" style={{ padding: '20px 0' }}>
          <span className="flex-none text-[13px] font-semibold" style={{ width: 84, color: '#2f3136' }}>
            Then
          </span>
          <span className="text-[19px] font-bold" style={{ lineHeight: 1.4, color: '#2f3136' }}>
            And somehow, tomorrow becomes next Monday.
          </span>
        </div>
      </div>
    </section>
  )
}
