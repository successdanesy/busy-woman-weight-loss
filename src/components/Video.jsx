export default function Video() {
  return (
    <section className="max-w-[1160px] mx-auto flex justify-center" style={{ padding: '0 clamp(16px,3vw,40px)' }}>
      <div
        className="rounded-panel overflow-hidden"
        style={{
          width: '100%',
          maxWidth: 420,
          aspectRatio: '9/16',
          background: '#e3f5da',
          boxShadow: '0 40px 80px -50px rgba(20,90,60,.3)',
        }}
      >
        <video
          src="/testimonial-video.mp4"
          controls
          playsInline
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </section>
  )
}
