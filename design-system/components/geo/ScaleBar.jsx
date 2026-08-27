import React from 'react';

export function ScaleBar({ length = 100, unit = 'm', pixels = 160, segments = 4, tone = 'light', style, ...rest }) {
  const color = tone === 'light' ? 'var(--fg-primary)' : 'var(--n-000)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, ...style }} {...rest}>
      <div style={{ display: 'flex', width: pixels, height: 6, border: '1px solid ' + color }}>
        {Array.from({ length: segments }).map((_, i) => (
          <span key={i} style={{ flex: 1, background: i % 2 ? 'transparent' : color }} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: pixels, fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color, fontVariantNumeric: 'tabular-nums' }}>
        <span>0</span><span>{length} {unit}</span>
      </div>
    </div>
  );
}
