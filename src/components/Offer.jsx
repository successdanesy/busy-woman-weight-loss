const CHECKLIST = [
  'Main ebook',
  'Companion workbook',
  '7-day meal planner',
  'Grocery checklist',
  'Weekly habit tracker',
  '30-day challenge',
  'Restaurant cheat sheet',
  '90-day action plan',
  'Community access',
]

export default function Offer() {
  return (
    <section
      id="buy"
      className="max-w-[1000px] mx-auto flex flex-col items-center gap-12"
      style={{ padding: 'clamp(80px,12vw,140px) clamp(20px,4vw,40px) clamp(96px,14vw,140px)' }}
    >
      <div className="flex flex-col items-center text-center gap-5" style={{ maxWidth: 640 }}>
        <span
          className="text-[13px] font-semibold uppercase"
          style={{ letterSpacing: '.18em', color: '#2f7a5c' }}
        >
          The complete system
        </span>
        <h2
          className="m-0 font-light"
          style={{ fontSize: 'clamp(30px,4vw,44px)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
        >
          Everything, in one package.
        </h2>
        <p className="m-0 text-[16px]" style={{ lineHeight: 1.6, color: '#5b6b63' }}>
          Not just a few pages of advice. Instead of buying each resource separately, get the complete package
          together.
        </p>
      </div>

      <ul
        className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 text-[15px] w-full"
        style={{ gap: '12px 28px', maxWidth: 640 }}
      >
        {CHECKLIST.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span
              className="flex-none w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] font-bold"
              style={{ background: '#d9f0cf', color: '#13241e' }}
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div
        className="flex flex-col items-center gap-[18px] rounded-panel border border-border1"
        style={{
          width: '100%',
          maxWidth: 440,
          padding: 'clamp(32px,6vw,48px)',
          background: '#fff',
          boxShadow: '0 40px 80px -60px rgba(20,90,60,.35)',
        }}
      >
        <span
          className="self-center text-[13px] font-bold rounded-btn text-white"
          style={{ padding: '7px 14px', background: '#13241e' }}
        >
          Today&rsquo;s offer · Save 50%
        </span>
        <div className="flex items-baseline gap-3 flex-wrap justify-center">
          <span
            className="font-bold"
            style={{ fontSize: 'clamp(52px,7vw,72px)', letterSpacing: '-0.04em', lineHeight: 1 }}
          >
            ₦15,000
          </span>
          <span className="text-[20px]" style={{ color: '#5b6b63' }}>
            / $15
          </span>
        </div>
        <span className="text-[15px]" style={{ color: '#8a948c' }}>
          Reference price <span style={{ textDecoration: 'line-through' }}>₦30,000 / $30</span>
        </span>
        <a
          href="https://nestuge.com/busywomanweightloss"
          className="mt-1.5 flex justify-center items-center w-full font-bold rounded-full text-center"
          style={{
            padding: 'clamp(14px,4vw,18px) clamp(16px,4vw,32px)',
            fontSize: 'clamp(14px,3.6vw,16px)',
            whiteSpace: 'nowrap',
            background: '#b6e6a0',
            color: '#0d2a22',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#a3d889')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#b6e6a0')}
        >
          Get the complete system now
        </a>
        <span className="text-[13px] text-center" style={{ color: '#8a948c' }}>
          One payment · Digital product · No monthly subscription
        </span>
      </div>
    </section>
  )
}
