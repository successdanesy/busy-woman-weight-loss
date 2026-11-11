const FOR = [
  'You’re a working woman with a busy schedule',
  'You’ve tried different diets but struggled to maintain them',
  'You want healthier habits without giving up familiar meals',
  'Long work hours make meal planning hard',
  'You want simple movement that fits into your day',
  'You keep starting over every Monday',
  'You want a guide and workbook to stay organised',
]

const NOT_FOR = [
  'You’re looking for an overnight transformation',
  'You expect a guaranteed number of kilograms to disappear',
  'You’re unwilling to practise or build new habits',
  'You want an extreme diet or quick fix',
]

export default function WhoItsFor() {
  return (
    <section
      className="max-w-[1000px] mx-auto flex flex-col gap-10"
      style={{ padding: 'clamp(80px,12vw,140px) clamp(20px,4vw,40px) clamp(64px,10vw,110px)' }}
    >
      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 'clamp(40px,6vw,80px)' }}
      >
        <div className="flex flex-col gap-[22px]">
          <h2 className="m-0 text-[30px] font-bold" style={{ letterSpacing: '-0.025em', color: '#2f3136' }}>
            This is for you if&hellip;
          </h2>
          <ul className="m-0 p-0 list-none flex flex-col gap-3.5 text-[16px]" style={{ lineHeight: 1.5 }}>
            {FOR.map((item) => (
              <li key={item} className="flex gap-3.5 items-baseline">
                <span
                  className="flex-none w-2 h-2 rounded-full"
                  style={{ background: '#4d7aa6', transform: 'translateY(-2px)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[22px]">
          <h2 className="m-0 text-[30px] font-bold" style={{ letterSpacing: '-0.025em', color: '#8a8d93' }}>
            This may not be for you if&hellip;
          </h2>
          <ul
            className="m-0 p-0 list-none flex flex-col gap-3.5 text-[16px]"
            style={{ lineHeight: 1.5, color: '#6c6f75' }}
          >
            {NOT_FOR.map((item) => (
              <li key={item} className="flex gap-3.5 items-baseline">
                <span
                  className="flex-none w-2 h-2 rounded-full box-border"
                  style={{ border: '1.5px solid #c3c6cb', transform: 'translateY(-2px)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className="m-0 text-center text-[17px] font-semibold border-t border-border1"
        style={{ paddingTop: 28 }}
      >
        Realistic habits and sustainable progress, not promises of instant results.
      </p>
    </section>
  )
}
