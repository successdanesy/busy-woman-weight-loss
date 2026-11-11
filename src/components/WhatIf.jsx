const LIST = [
  'Knowing what to eat',
  'Knowing how to move',
  'Handling office temptations',
  'A plan for when your schedule gets overwhelming',
]

export default function WhatIf() {
  return (
    <section style={{ background: '#383b42' }}>
      <div
        className="max-w-[1160px] mx-auto text-white grid items-center"
        style={{
          padding: 'clamp(40px,7vw,80px) clamp(20px,4vw,40px)',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
          gap: 'clamp(32px,5vw,64px)',
        }}
      >
        <div className="flex flex-col gap-[22px]">
          <span
            className="text-[13px] font-semibold uppercase"
            style={{ letterSpacing: '.18em', color: '#9cc4ec' }}
          >
            Imagine this
          </span>
          <h2
            className="m-0 font-light"
            style={{ fontSize: 'clamp(32px,4.6vw,52px)', lineHeight: 1.06, letterSpacing: '-0.035em', textWrap: 'balance' }}
          >
            What if weight loss could fit{' '}
            <span className="font-bold" style={{ color: '#9cc4ec' }}>the life you already have?</span>
          </h2>
          <p className="m-0 text-[17px]" style={{ lineHeight: 1.6, color: '#b9bcc2', maxWidth: 420 }}>
            No new diet every Monday. Just better choices with the foods already around you.
          </p>
        </div>

        <div className="flex flex-col border-t" style={{ borderColor: '#4b4e56' }}>
          {LIST.map((item, i) => (
            <div
              key={item}
              className="flex items-baseline gap-4"
              style={{
                padding: '18px 0',
                borderBottom: i < LIST.length - 1 ? '1px solid #4b4e56' : undefined,
              }}
            >
              <span className="flex-none text-[13px] font-bold" style={{ color: '#9cc4ec' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[18px] text-white" style={{ lineHeight: 1.4 }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-6 border-t"
          style={{
            gridColumn: '1 / -1',
            paddingTop: 'clamp(28px,4vw,40px)',
            borderColor: '#4b4e56',
          }}
        >
          <p className="m-0 text-[18px]" style={{ maxWidth: 620, lineHeight: 1.55, color: '#d7d9dd' }}>
            That&rsquo;s why Delipher created{' '}
            <strong className="text-white">The Busy Woman&rsquo;s Weight Loss System</strong>. It isn&rsquo;t about
            perfection. It&rsquo;s about a routine you can actually maintain.
          </p>
          <a
            href="https://nestuge.com/busywomanweightloss"
            className="whitespace-nowrap text-[15px] font-semibold rounded-full"
            style={{ padding: '16px 30px', background: '#9cc4ec', color: '#1f2126' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#87b5e3')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#9cc4ec')}
          >
            Get instant access for ₦15,000
          </a>
        </div>
      </div>
    </section>
  )
}
