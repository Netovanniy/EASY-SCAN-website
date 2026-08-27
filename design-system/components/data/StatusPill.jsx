import React from 'react';

const MAP = {
  scheduled: ['var(--scan-scheduled)', '○', 'Scheduled'],
  captured: ['var(--scan-captured)', '◐', 'Captured'],
  processing: ['var(--scan-processing)', '◑', 'Processing'],
  ready: ['var(--scan-ready)', '●', 'Ready'],
  updated: ['var(--scan-updated)', '◈', 'Updated']
};

/* Colour is never the only signal — every state carries a symbol and a word. */
export function StatusPill({ status = 'ready', label, style, ...rest }) {
  const [color, symbol, fallback] = MAP[status] || MAP.ready;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '3px 9px 3px 7px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-1)', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-secondary)', ...style }} {...rest}>
      <span aria-hidden="true" style={{ color, fontSize: 11 }}>{symbol}</span>
      {label || fallback}
    </span>
  );
}
