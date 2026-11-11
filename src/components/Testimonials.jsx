import testimonialPhoto from '../assets/testimonial-01.png'

export default function Testimonials() {
  return (
    <section style={{ background: '#383b42' }}>
      <div
        className="max-w-[1160px] mx-auto flex flex-col gap-10"
        style={{ padding: 'clamp(64px,10vw,110px) clamp(16px,3vw,40px)' }}
      >
        <h2
          className="m-0 text-center font-light text-white"
          style={{ fontSize: 'clamp(32px,4.4vw,48px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
        >
          What women <span className="font-bold" style={{ color: '#9cc4ec' }}>are saying</span>
        </h2>

        {/* TODO: replace with the real quote once confirmed with her, this draft is a placeholder for review */}
        <div
          className="mx-auto rounded-card overflow-hidden grid"
          style={{
            maxWidth: 720,
            width: '100%',
            background: '#4b4e56',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
          }}
        >
          <img
            src={testimonialPhoto}
            alt="Before and after photos of a woman who followed The Busy Woman's Weight Loss System"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div className="flex flex-col justify-between gap-6" style={{ padding: 28 }}>
            <span className="text-[40px] font-bold" style={{ lineHeight: 0.5, color: '#9cc4ec' }}>
              &ldquo;
            </span>
            <p className="m-0 text-[16px]" style={{ lineHeight: 1.6, color: '#fff' }}>
              I was tired of starting over every Monday. This guide finally gave me something I could stick to
              around my work schedule, no gym, no giving up the food I love. I feel so much more confident now.
            </p>
            <span className="text-[14px]" style={{ color: '#b9bcc2' }}>
              Real customer, used with permission
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
