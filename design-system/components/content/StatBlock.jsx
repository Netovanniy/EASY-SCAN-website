import React from 'react';

export function StatBlock({ value, unit, label, note, tone = 'default', align = 'left', style, ...rest }) {
  const color = { default: 'var(--fg-primary)', instrument: 'var(--accent-scan)', brand: 'var(--accent-coral)' }[tone];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, textAlign: align, ...style }} {...rest}>
      <div style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-xl)', lineHeight: 1.05, letterSpacing: '-0.01em', color, display: 'flex', alignItems: 'baseline', gap: 6, justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}>
        <span>{value}</span>
        {unit && <span style={{ fontSize: 'var(--type-body)', color: 'var(--fg-muted)' }}>{unit}</span>}
      </div>
      <div style={{ fontFamily: 'var(--font-structure)', fontSize: 'var(--type-label-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{label}</div>
      {note && <div style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-faint)' }}>{note}</div>}
    </div>
  );
}
