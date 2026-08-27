import React from 'react';

const MAP = {
  measured: ['var(--status-measured)', '◆', 'Measured'],
  verified: ['var(--status-verified)', '✓', 'Verified'],
  calculated: ['var(--status-calculated)', 'ƒ', 'Calculated'],
  estimated: ['var(--status-estimated)', '≈', 'Estimated'],
  approximate: ['var(--status-approximate)', '~', 'Approximate'],
  conceptual: ['var(--status-conceptual)', '◇', 'Conceptual'],
  unknown: ['var(--status-unavailable)', '?', 'Unknown'],
  unavailable: ['var(--status-unavailable)', '—', 'Not available']
};

/* Confidence must be readable without colour: symbol + word always present. */
export function ConfidenceTag({ level = 'measured', source, style, ...rest }) {
  const [color, symbol, word] = MAP[level] || MAP.measured;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6, fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-data)', color: 'var(--fg-muted)', ...style }} {...rest}>
      <span aria-hidden="true" style={{ color }}>{symbol}</span>
      <span style={{ color, textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>{word}</span>
      {source && <span style={{ color: 'var(--fg-faint)' }}>· {source}</span>}
    </span>
  );
}
