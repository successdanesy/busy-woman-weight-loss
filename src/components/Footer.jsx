import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer style={{ background: '#eef7ea' }}>
      <div
        className="max-w-[1160px] mx-auto flex flex-col gap-10"
        style={{ padding: 'clamp(56px,8vw,96px) clamp(20px,4vw,40px) 120px' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="flex items-center gap-3">
            <Logo />
          </span>

          {/* href needs the client's email or WhatsApp contact link */}
          <a
            href="#"
            className="text-[15px] font-semibold hover:text-ink"
            style={{ color: '#5b6b63' }}
          >
            Contact
          </a>
        </div>

        <p className="m-0 text-[15px]" style={{ lineHeight: 1.6, color: '#5b6b63', maxWidth: 320 }}>
          Realistic weight-loss habits for women with full lives.
        </p>

        <div
          className="flex flex-wrap justify-between gap-3 border-t border-border1 text-[13px]"
          style={{ paddingTop: 24, color: '#8a948c' }}
        >
          <span>© 2026 The Busy Woman&rsquo;s Weight Loss System · Delipher Ventino</span>
          <span>General education, not medical advice.</span>
        </div>
      </div>
    </footer>
  )
}
