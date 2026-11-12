import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer style={{ background: '#eef7ea' }}>
      <div
        className="max-w-[1160px] mx-auto flex flex-col gap-6"
        style={{ padding: 'clamp(40px,6vw,64px) clamp(20px,4vw,40px) 120px' }}
      >
        <Logo />

        <p
          className="m-0 text-center text-[13px] border-t border-border1"
          style={{ paddingTop: 20, color: '#8a948c' }}
        >
          © 2026 The Busy Woman&rsquo;s Weight Loss System · Delipher Ventino · General education, not medical
          advice.
        </p>
      </div>
    </footer>
  )
}
