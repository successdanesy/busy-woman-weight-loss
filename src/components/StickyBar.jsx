import { useEffect, useState } from 'react'

export default function StickyBar({ enabled = true }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!enabled || !scrolled) return null

  return (
    <div
      className="fixed left-1/2 flex items-center gap-4 rounded-btn text-white"
      style={{
        bottom: 20,
        transform: 'translateX(-50%)',
        zIndex: 30,
        padding: '6px 6px 6px 22px',
        background: '#2a2c31',
        boxShadow: '0 14px 34px -12px rgba(20,24,32,.45)',
        maxWidth: 'calc(100% - 32px)',
      }}
    >
      <span className="text-[15px] font-semibold whitespace-nowrap">
        ₦15,000{' '}
        <span style={{ color: '#a3a6ab', fontWeight: 400, textDecoration: 'line-through' }}>₦30,000</span>
      </span>
      <a
        href="https://nestuge.com/busywomanweightloss"
        className="whitespace-nowrap text-[14px] font-bold rounded-btn"
        style={{ padding: '11px 20px', background: '#fff', color: '#2f3136' }}
      >
        Get access
      </a>
    </div>
  )
}
