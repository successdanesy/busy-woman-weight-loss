import Treadmill from './Treadmill.jsx'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div
        className="relative max-w-[900px] mx-auto flex flex-col items-center text-center"
        style={{
          padding: 'clamp(56px,9vw,112px) 20px clamp(40px,6vw,64px)',
          gap: 26,
        }}
      >
        <span
          className="text-[13px] font-semibold uppercase"
          style={{ letterSpacing: '.18em', color: '#134e3f' }}
        >
          The Busy Woman&rsquo;s Weight Loss System
        </span>

        <h1
          data-bw-h1
          className="m-0 font-light"
          style={{
            fontSize: 'clamp(42px,7vw,84px)',
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            textWrap: 'balance',
            color: '#13241e',
          }}
        >
          Lose{' '}
          <span
            data-bw-weight
            className="font-extrabold"
            style={{ fontSize: '1.1em', letterSpacing: '-0.045em' }}
          >
            weight
          </span>{' '}
          without living in the{' '}
          <span
            className="relative inline-block whitespace-nowrap"
            style={{ isolation: 'isolate', padding: '0 .04em .3em', marginRight: '.85em' }}
          >
            gym.
            {/* <Treadmill /> */}
          </span>
        </h1>

        <p
          className="m-0"
          style={{
            maxWidth: 480,
            fontSize: 'clamp(17px,2vw,19px)',
            lineHeight: 1.6,
            color: '#5b6b63',
            textWrap: 'pretty',
          }}
        >
          A practical guide for women balancing work, family, long commutes and deadlines.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-[22px] mt-1.5">
          <a
            href="https://nestuge.com/busywomanweightloss"
            className="whitespace-nowrap text-[16px] font-semibold rounded-full"
            style={{
              padding: '17px 32px',
              background: '#b6e6a0',
              color: '#0d2a22',
              boxShadow: '0 14px 30px -14px rgba(30,110,70,.35)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#a3d889')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#b6e6a0')}
          >
            Get it for ₦15,000
          </a>
          <a
            href="#buy"
            className="whitespace-nowrap text-[16px] font-semibold"
            style={{
              color: '#123a2f',
              borderBottom: '1.5px solid #bfe8ab',
              paddingBottom: 2,
              display: 'none',
            }}
          >
            See what&rsquo;s inside
          </a>
        </div>

        <span className="text-[14px]" style={{ color: '#8a948c' }}>
          <span style={{ textDecoration: 'line-through' }}>₦30,000 / $30</span> · ₦15,000 / $15 · One-time payment
        </span>
      </div>
    </header>
  )
}
