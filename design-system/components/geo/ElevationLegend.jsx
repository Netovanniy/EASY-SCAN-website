import React from 'react';

export function ElevationLegend({ min, max, interval, unit = 'm', datum = 'MSL', ramp = 'var(--elev-ramp)', orientation = 'horizontal', ticks, style, ...rest }) {
  const vertical = orientation === 'vertical';
  const marks = ticks || [min, Math.round((min + max) / 2), max];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: vertical ? 0 : 200, ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-structure)', fontSize: 'var(--type-label-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Elevation</span>
      <div style={{ display: 'flex', flexDirection: vertical ? 'row' : 'column', gap: 6 }}>
        <span style={{ background: vertical ? ramp.replace('90deg', '0deg') : ramp, ...(vertical ? { width: 8, height: 140 } : { height: 8 }), display: 'block', border: '1px solid var(--border-faint)' }} />
        <span style={{ display: 'flex', flexDirection: vertical ? 'column-reverse' : 'row', justifyContent: 'space-between', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-secondary)', fontVariantNumeric: 'tabular-nums' }}>
          {marks.map((m, i) => <span key={i}>{m}</span>)}
        </span>
      </div>
      <span style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-faint)' }}>
        {unit} {datum} · {interval} {unit} interval
      </span>
    </div>
  );
}
