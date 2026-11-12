import { useState } from 'react'
import Logo from './Logo.jsx'

const NAV_LINKS = [
  { href: '#week', label: 'Sound familiar?' },
  { href: '#system', label: 'The system' },
  { href: '#buy', label: "What's inside" },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div style={{ height: 80 }} />
      <nav
        className="fixed top-0 left-0 right-0 z-20 border-b border-border1"
        style={{ background: '#f6f8f6' }}
      >
        <div
          className="max-w-[1160px] mx-auto flex items-center justify-between gap-5"
          style={{ padding: '18px clamp(20px,4vw,40px)' }}
        >
          <a
            href="#"
            aria-label="The Busy Woman's Weight Loss System, home"
            className="flex items-center gap-2.5 text-ink"
          >
            <Logo />
          </a>

          <div className="hidden min-[900px]:flex gap-[34px] text-[15px] font-medium whitespace-nowrap">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="https://nestuge.com/busywomanweightloss"
            className="hidden min-[900px]:inline-block whitespace-nowrap text-[14px] font-semibold rounded-full"
            style={{ padding: '12px 22px', background: '#b6e6a0', color: '#0d2a22' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#a3d889')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#b6e6a0')}
          >
            Get the system
          </a>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="min-[900px]:hidden flex items-center gap-2.5 h-11 rounded-btn text-white text-[14px] font-semibold"
            style={{ padding: '0 16px 0 14px', background: '#13241e', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            <span className="flex flex-col items-end gap-1">
              <span className="w-[18px] h-[2px] rounded-[2px]" style={{ background: '#b6e6a0' }} />
              <span className="w-[12px] h-[2px] rounded-[2px] bg-white" />
              <span className="w-[15px] h-[2px] rounded-[2px] bg-white" />
            </span>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="min-[900px]:hidden flex flex-col px-5 pb-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-[18px] text-ink border-b border-border2"
                style={{ padding: '15px 4px' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://nestuge.com/busywomanweightloss"
              onClick={closeMenu}
              className="mt-3 text-center text-[16px] font-semibold rounded-full"
              style={{ padding: 16, background: '#b6e6a0', color: '#0d2a22' }}
            >
              Get the system · ₦15,000
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
