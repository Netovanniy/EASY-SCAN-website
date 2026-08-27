import React from 'react';

/* EXISTING → PROPOSED, PHYSICAL → DIGITAL TWIN, RAW → ANALYSED.
   A draggable seam, because comparison is a spatial act. */
export function BeforeAfter({ beforeSrc, afterSrc, beforeLabel = 'Existing', afterLabel = 'Proposed', ratio = '16 / 9', initial = 50, style, ...rest }) {
  const [pos, setPos] = React.useState(initial);
  const ref = React.useRef(null);
  const move = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };
  const label = (text, side) => (
    <span style={{ position: 'absolute', top: 'var(--space-4)', [side]: 'var(--space-4)', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', padding: '4px 8px', background: 'rgba(0,0,0,.6)', color: side === 'left' ? 'var(--fg-primary)' : 'var(--accent-coral)' }}>{text}</span>
  );
  return (
    <div ref={ref} onMouseMove={(e) => e.buttons === 1 && move(e.clientX)} onMouseDown={(e) => move(e.clientX)}
      style={{ position: 'relative', aspectRatio: ratio, overflow: 'hidden', userSelect: 'none', cursor: 'ew-resize', background: 'var(--bg-inset)', ...style }} {...rest}>
      <img src={afterSrc} alt={afterLabel} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <span style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 ' + (100 - pos) + '% 0 0)' }}>
        <img src={beforeSrc} alt={beforeLabel} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </span>
      <span aria-hidden="true" style={{ position: 'absolute', top: 0, bottom: 0, left: pos + '%', width: 1, background: 'var(--accent-scan)' }} />
      <span aria-hidden="true" style={{ position: 'absolute', top: '50%', left: pos + '%', transform: 'translate(-50%,-50%)', width: 28, height: 28, border: '1px solid var(--accent-scan)', background: 'rgba(0,0,0,.5)' }} />
      {label(beforeLabel, 'left')}
      {label(afterLabel, 'right')}
      <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Comparison position"
        style={{ position: 'absolute', bottom: 8, left: '10%', width: '80%', opacity: 0.001, height: 24 }} />
    </div>
  );
}
