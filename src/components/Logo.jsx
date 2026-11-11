export default function Logo() {
  return (
    <span className="flex items-end gap-[5px] h-[30px] pl-[5px]">
      <span
        className="w-[11px] h-[18px] rounded-[6px]"
        style={{ background: '#cfe2f5', transform: 'skewX(-16deg)' }}
      />
      <span
        className="w-[11px] h-[30px] rounded-[6px]"
        style={{ background: '#4d7aa6', transform: 'skewX(-16deg)' }}
      />
      <span
        className="w-[11px] h-[30px] rounded-[6px]"
        style={{ background: '#2f3136', transform: 'skewX(-16deg)' }}
      />
    </span>
  )
}
