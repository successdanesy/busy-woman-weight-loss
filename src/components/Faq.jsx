const QA = [
  {
    q: 'Do I have to stop eating the foods I love?',
    a: 'No. The guide shows how to approach familiar foods and everyday meals. The goal is more balanced habits, not eliminating your culture or favourite foods.',
  },
  {
    q: 'Do I need to go to the gym?',
    a: 'No. The guide explores walking, home workouts, dancing, stair climbing and strength exercises.',
  },
  {
    q: 'Will this work with a busy work schedule?',
    a: 'Yes. It was created with working women and their everyday responsibilities in mind, and focuses on habits that fit around a busy schedule.',
  },
  {
    q: 'What exactly am I buying?',
    a: 'The main ebook, the companion workbook, the listed planning resources and community access.',
  },
  {
    q: 'Is this a physical book?',
    a: 'No. It’s a digital product you can open on a compatible phone, tablet or computer.',
  },
  {
    q: 'How quickly will I lose weight?',
    a: 'Results vary from person to person. The guide doesn’t promise a specific amount of weight loss or a timeline. It gives you practical education and tools to build healthier habits.',
  },
  {
    q: 'Do I get access to a community?',
    a: 'Yes. Community access is included. Joining details are provided after purchase.',
  },
  {
    q: 'Do I have to pay every month?',
    a: 'No. It’s a one-time payment, with no monthly subscription.',
  },
  {
    q: 'What if I have a medical condition or special dietary needs?',
    a: 'The guide is general education, not individual medical advice. If you have a medical condition, are pregnant or breastfeeding, or have specific health needs, speak with a qualified healthcare professional before making significant changes to your eating or exercise.',
  },
]

export default function Faq() {
  return (
    <section
      id="faq"
      className="max-w-[760px] mx-auto flex flex-col gap-8"
      style={{ padding: '0 clamp(20px,4vw,40px) clamp(64px,10vw,110px)' }}
    >
      <h2
        className="m-0 text-center font-light"
        style={{ fontSize: 'clamp(32px,4.4vw,48px)', lineHeight: 1.08, letterSpacing: '-0.03em', textWrap: 'balance' }}
      >
        Frequently asked <span className="font-bold" style={{ color: '#2f3136' }}>questions</span>
      </h2>

      <div className="flex flex-col border-t border-border1">
        {QA.map((item) => (
          <details key={item.q} className="border-b border-border1">
            <summary
              className="list-none cursor-pointer flex justify-between items-center gap-5 text-[18px] font-semibold"
              style={{ padding: '22px 0' }}
            >
              {item.q}
              <span
                className="faq-plus text-[24px] font-light"
                style={{ color: '#4d7aa6', transition: 'transform .2s' }}
              >
                +
              </span>
            </summary>
            <p className="text-[16px]" style={{ margin: '0 0 22px', color: '#5f6268', lineHeight: 1.65 }}>
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
