export default function Treadmill() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 300"
      style={{
        position: 'absolute',
        left: '-.12em',
        bottom: '-.1em',
        width: '2.9em',
        height: '1.45em',
        zIndex: -1,
        overflow: 'visible',
      }}
    >
      <ellipse cx="310" cy="290" rx="292" ry="9" fill="rgba(35,37,42,.13)" />
      <path d="M560 214 L590 92" stroke="#1f2126" strokeWidth="13" strokeLinecap="round" />
      <path d="M586 108 Q572 120 516 112" stroke="#1f2126" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M8 252 L40 226 L540 226 L508 252 Z" fill="#4a4d55" />
      <path d="M22 248 L48 229 L520 229 L494 248 Z" fill="#3a3d44" />
      <line
        x1="40"
        y1="238.5"
        x2="506"
        y2="238.5"
        stroke="rgba(255,255,255,.75)"
        strokeWidth="6"
        strokeDasharray="14 22"
        className="treadmill-belt"
      />
      <line x1="40" y1="226" x2="540" y2="226" stroke="#6a6e77" strokeWidth="3" />
      <path
        d="M8 252 L508 252 L508 272 Q508 276 504 276 L12 276 Q8 276 8 272 Z"
        fill="#2f3136"
      />
      <path d="M508 252 L540 226 L540 246 L508 276 Z" fill="#1f2126" />
      <ellipse cx="14" cy="264" rx="7" ry="12" fill="#1f2126" />
      <circle cx="40" cy="282" r="8" fill="#1f2126" />
      <path
        d="M470 232 Q470 210 494 208 L566 208 Q586 208 594 222 L566 246 L486 246 Z"
        fill="#4a4d55"
      />
      <path d="M486 246 L566 246 L566 278 L486 278 Z" fill="#2f3136" />
      <path d="M566 246 L594 222 L594 254 L566 278 Z" fill="#1f2126" />
      <path d="M458 278 L578 278 L600 262 L600 270 L580 288 L458 288 Z" fill="#1f2126" />
      <path d="M522 238 L556 92 L568 94 L534 240 Z" fill="#2f3136" />
      <path d="M534 240 L568 94 L576 98 L542 236 Z" fill="#1f2126" />
      <path d="M558 112 Q548 124 488 124" stroke="#2f3136" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M556 108 Q546 119 490 119" stroke="#6a6e77" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M540 100 L600 92 L604 80 L560 66 Q548 64 544 72 Z" fill="#2f3136" />
      <path d="M544 72 Q548 64 560 66 L604 80" stroke="#6a6e77" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M541 98 L546 74" stroke="#9cc4ec" strokeWidth="5" strokeLinecap="round" />
      <path d="M540 100 L600 92" stroke="#1f2126" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}
