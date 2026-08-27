import React from 'react';

/* Small tracked label above a heading. Carries an optional index (01, 02) —
   the numbered-process pattern from the EASY SCAN homepage. */
export function Eyebrow({ children, index, tone = 'default', rule = false, style, ...rest }) {
  const color = { default: 'var(--fg-muted)', accent: 'var(--accent-coral)', instrument: 'var(--accent-scan)' }[tone];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color, ...style }} {...rest}>
      {index != null && <span style={{ color: 'var(--fg-faint)' }}>{String(index).padStart(2, '0')}</span>}
      <span>{children}</span>
      {rule && <span style={{ flex: 1, height: 1, background: 'var(--border-hairline)' }} />}
    </div>
  );
}
