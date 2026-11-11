import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer
      className="max-w-[1160px] mx-auto flex flex-col gap-12"
      style={{ padding: 'clamp(56px,8vw,96px) clamp(20px,4vw,40px) 120px' }}
    >
      <div className="flex flex-wrap justify-between gap-10">
        <div className="flex flex-col gap-4" style={{ maxWidth: 320 }}>
          <span className="flex items-center gap-3">
            <Logo />
          </span>
          <p className="m-0 text-[15px]" style={{ lineHeight: 1.6, color: '#5f6268' }}>
            Realistic weight-loss habits for women with full lives.
          </p>
        </div>

        <div className="flex flex-wrap" style={{ gap: 'clamp(40px,7vw,96px)' }}>
          <div className="flex flex-col gap-3">
            <span
              className="text-[12px] font-bold uppercase"
              style={{ letterSpacing: '.16em', color: '#2c5680' }}
            >
              Explore
            </span>
            <a href="#system" className="text-[15px] hover:text-ink" style={{ color: '#5f6268' }}>
              The system
            </a>
            <a href="#buy" className="text-[15px] hover:text-ink" style={{ color: '#5f6268' }}>
              What&rsquo;s inside
            </a>
            <a href="#buy" className="text-[15px] hover:text-ink" style={{ color: '#5f6268' }}>
              Pricing
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span
              className="text-[12px] font-bold uppercase"
              style={{ letterSpacing: '.16em', color: '#2c5680' }}
            >
              Help
            </span>
            <a href="#faq" className="text-[15px] hover:text-ink" style={{ color: '#5f6268' }}>
              FAQ
            </a>
            {/* href needs the client's email or WhatsApp contact link */}
            <a href="#" className="text-[15px] hover:text-ink" style={{ color: '#5f6268' }}>
              Contact
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex flex-wrap justify-between gap-3 border-t border-border1 text-[13px]"
        style={{ paddingTop: 24, color: '#8a8d93' }}
      >
        <span>© 2026 The Busy Woman&rsquo;s Weight Loss System · Delipher Ventino</span>
        <span>General education, not medical advice.</span>
      </div>
    </footer>
  )
}
