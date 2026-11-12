export default function Logo() {
  return (
    <span className="flex items-end gap-[5px] h-[30px] pl-[5px]">
      <span
        className="w-[11px] h-[18px] rounded-[6px]"
        style={{ background: '#cfe9c4', transform: 'skewX(-16deg)' }}
      />
      <span
        className="w-[11px] h-[30px] rounded-[6px]"
        style={{ background: '#2f7a5c', transform: 'skewX(-16deg)' }}
      />
      <span
        className="w-[11px] h-[30px] rounded-[6px]"
        style={{ background: '#123a2f', transform: 'skewX(-16deg)' }}
      />
    </span>
  )
}
