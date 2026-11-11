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
    <section id="buy" className="max-w-[1160px] mx-auto" style={{ padding: '0 clamp(16px,3vw,40px) clamp(64px,10vw,110px)' }}>
      <div
        className="rounded-panel bg-white border border-border1 grid overflow-hidden"
        style={{
          boxShadow: '0 40px 80px -60px rgba(40,70,110,.35)',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
        }}
      >
        <div className="flex flex-col gap-6" style={{ padding: 'clamp(32px,6vw,64px)' }}>
          <span
            className="text-[13px] font-semibold uppercase"
            style={{ letterSpacing: '.18em', color: '#4d7aa6' }}
          >
            The complete system
          </span>
          <h2
            className="m-0 font-light"
            style={{ fontSize: 'clamp(30px,4vw,44px)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            Everything, <span className="font-bold">in one package.</span>
          </h2>
          <p className="m-0 text-[16px]" style={{ lineHeight: 1.6, color: '#5f6268' }}>
            Not just a few pages of advice. Instead of buying each resource separately, get the complete package
            together.
          </p>
          <ul
            className="m-0 p-0 list-none grid text-[15px]"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '12px 20px' }}
          >
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="flex-none w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{ background: '#e3eefa', color: '#23252a' }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex flex-col justify-center gap-[18px] border-l border-border1"
          style={{ padding: 'clamp(32px,6vw,64px)', background: '#f4f8fc' }}
        >
          <span
            className="self-start text-[13px] font-bold rounded-btn text-white"
            style={{ padding: '7px 14px', background: '#23252a' }}
          >
            Today&rsquo;s offer · Save 50%
          </span>
          <div className="flex items-baseline gap-3 flex-wrap">
            <span
              className="font-bold"
              style={{ fontSize: 'clamp(52px,7vw,72px)', letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              ₦15,000
            </span>
            <span className="text-[20px]" style={{ color: '#5f6268' }}>
              / $15
            </span>
          </div>
          <span className="text-[15px]" style={{ color: '#8a8d93' }}>
            Reference price <span style={{ textDecoration: 'line-through' }}>₦30,000 / $30</span>
          </span>
          <a
            href="https://nestuge.com/busywomanweightloss"
            className="mt-1.5 flex justify-center text-[16px] font-bold rounded-btn"
            style={{ padding: '18px 32px', background: '#9cc4ec', color: '#1f2126' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#87b5e3')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#9cc4ec')}
          >
            Get the complete system now
          </a>
          <span className="text-[13px] text-center" style={{ color: '#8a8d93' }}>
            One payment · Digital product · No monthly subscription
          </span>
        </div>
      </div>
    </section>
  )
}
