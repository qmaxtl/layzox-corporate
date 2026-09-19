/** A directional study in connected paths. This is an illustration, never a logo. */
export function FlowField() {
  return (
    <svg className="flow-field" viewBox="0 0 640 570" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="forward-spectrum" x1="50" y1="500" x2="580" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0644cd" /><stop offset=".36" stopColor="#087de2" /><stop offset=".61" stopColor="#00bacc" /><stop offset=".82" stopColor="#22b89d" /><stop offset="1" stopColor="#a8ed48" />
        </linearGradient>
        <linearGradient id="flow-echo" x1="0" y1="570" x2="640" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a76c9" stopOpacity="0" /><stop offset=".5" stopColor="#1a9bad" stopOpacity=".24" /><stop offset="1" stopColor="#90bf55" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="var(--color-rule)" strokeWidth=".65" opacity=".55"><path d="M80 40V520M320 40V520M560 40V520M40 110H600M40 310H600M40 510H600" /></g>
      <g stroke="url(#flow-echo)" strokeWidth="1">{Array.from({ length: 9 }, (_, i) => <path key={i} d={`M-80 ${520 + i * 13}C170 ${520 + i * 13} 246 ${280 + i * 8} 380 ${235 + i * 10}S600 ${300 + i * 4} 720 ${160 + i * 9}`} />)}</g>
      <g stroke="url(#forward-spectrum)" strokeWidth="3.2">{Array.from({ length: 34 }, (_, i) => <path key={i} d={`M${-100 + i * 5} ${402 + i * 4.4}C${155 + i * 3.4} ${402 + i * 4.4} ${158 + i * 3.3} ${72 + i * 4.4} ${402 + i * 4} ${72 + i * 4.4}L710 ${72 + i * 4.4}`} />)}</g>
      <g fill="var(--color-canvas)" stroke="var(--color-rule)"><circle cx="80" cy="310" r="3" /><circle cx="560" cy="310" r="3" /><circle cx="320" cy="510" r="3" /></g>
    </svg>
  );
}
