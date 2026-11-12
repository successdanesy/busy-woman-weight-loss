import testimonialWebp from '../assets/testimonial-01.webp'
import testimonialJpg from '../assets/testimonial-01.jpg'

export default function Testimonials() {
  return (
    <section style={{ background: '#0f3b30' }}>
      <div
        className="max-w-[1160px] mx-auto flex flex-col gap-10"
        style={{ padding: 'clamp(64px,10vw,110px) clamp(16px,3vw,40px)' }}
      >
        <h2
          className="m-0 text-center font-light text-white"
          style={{ fontSize: 'clamp(32px,4.4vw,48px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
        >
          What women <span style={{ color: '#b6e6a0' }}>are saying</span>
        </h2>

        {/* TODO: replace with the real quote once confirmed with her, this draft is a placeholder for review */}
        <div
          className="mx-auto rounded-card overflow-hidden grid grid-cols-1 sm:grid-cols-2"
          style={{
            maxWidth: 720,
            width: '100%',
            background: '#1f5446',
          }}
        >
          <picture>
            <source srcSet={testimonialWebp} type="image/webp" />
            <img
              src={testimonialJpg}
              alt="Before and after photos of a woman who followed The Busy Woman's Weight Loss System"
              width={900}
              height={900}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }}
            />
          </picture>
          <div className="flex flex-col justify-between gap-6" style={{ padding: 28 }}>
            <span className="text-[40px] font-bold" style={{ lineHeight: 0.5, color: '#b6e6a0' }}>
              &ldquo;
            </span>
            <p className="m-0 text-[16px]" style={{ lineHeight: 1.6, color: '#fff' }}>
              I was tired of starting over every Monday. This guide finally gave me something I could stick to
              around my work schedule, no gym, no giving up the food I love. I feel so much more confident now.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
