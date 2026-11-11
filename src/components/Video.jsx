export default function Video() {
  return (
    <section className="max-w-[1160px] mx-auto" style={{ padding: '0 clamp(16px,3vw,40px)' }}>
      <div
        className="w-full box-border flex flex-col items-center justify-center gap-3.5 rounded-panel"
        style={{
          aspectRatio: '16/8',
          minHeight: 220,
          background: '#e9f0f8',
          boxShadow: '0 40px 80px -50px rgba(40,70,110,.3)',
        }}
      >
        {/* Replace this placeholder with the client's video embed or <video> element, keeping the frame, radius and shadow. */}
        <span
          className="w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center"
          style={{ boxShadow: '0 10px 30px -10px rgba(40,70,110,.3)' }}
        >
          <span
            style={{
              width: 0,
              height: 0,
              borderLeft: '18px solid #2f3136',
              borderTop: '11px solid transparent',
              borderBottom: '11px solid transparent',
              marginLeft: 5,
            }}
          />
        </span>
        <span className="text-[13px]" style={{ color: '#4d7aa6' }}>
          Video placeholder
        </span>
      </div>
    </section>
  )
}
