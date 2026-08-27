import React from 'react';

const TONES = {
  neutral: ['var(--fg-secondary)', 'var(--border-hairline)', 'transparent'],
  brand: ['var(--accent-coral)', 'var(--accent-coral-dim)', 'var(--accent-coral-tint)'],
  instrument: ['var(--accent-scan)', 'var(--accent-scan-dim)', 'var(--accent-scan-tint)'],
  demo: ['var(--status-estimated)', 'var(--status-estimated)', 'transparent']
};

export function Tag({ children, tone = 'neutral', symbol, style, ...rest }) {
  const [fg, bd, bg] = TONES[tone] || TONES.neutral;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 8px', border: '1px solid ' + bd, background: bg, color: fg, borderRadius: 'var(--radius-1)', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', lineHeight: 1.3, ...style }} {...rest}>
      {symbol && <span aria-hidden="true">{symbol}</span>}
      {children}
    </span>
  );
}
