import React from 'react';

/* Instrument-like annotation: endpoint ticks, thin line, mono value with unit.
   Not a HUD graphic. */
export function MeasurementLine({ value, unit, kind = 'distance', orientation = 'horizontal', length = '100%', tone = 'instrument', style, ...rest }) {
  const color = tone === 'instrument' ? 'var(--data-measure)' : 'var(--fg-primary)';
  const vertical = orientation === 'vertical';
  const prefix = { distance: '', height: 'Δ', elevation: '+', slope: '', area: '', volume: '' }[kind] || '';
  const tick = { background: color, position: 'absolute', ...(vertical ? { width: 11, height: 1, left: -5 } : { width: 1, height: 11, top: -5 }) };
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', ...(vertical ? { width: 1, height: length, flexDirection: 'column' } : { width: length, height: 1 }), background: color, ...style }} {...rest}>
      <span aria-hidden="true" style={{ ...tick, ...(vertical ? { top: 0 } : { left: 0 }) }} />
      <span aria-hidden="true" style={{ ...tick, ...(vertical ? { bottom: 0 } : { right: 0 }) }} />
      <span style={{ position: 'absolute', ...(vertical ? { left: 10 } : { bottom: 7 }), whiteSpace: 'nowrap', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-data)', color, background: 'rgba(0,0,0,.55)', padding: '1px 5px' }}>
        {prefix}{value}{unit ? ' ' + unit : ''}
      </span>
    </div>
  );
}
