import React from 'react';

const TYPES = {
  cadastral: { color: 'var(--boundary-cadastral)', dash: null, label: 'Official / title deed', note: 'Legally registered' },
  surveyed: { color: 'var(--boundary-surveyed)', dash: null, label: 'Surveyed on site', note: 'Measured by instrument' },
  approximate: { color: 'var(--boundary-approximate)', dash: '8 6', label: 'Approximate', note: 'Not legally verified' },
  conceptual: { color: 'var(--boundary-conceptual)', dash: '2 5', label: 'Conceptual development', note: 'Proposal only' }
};

/* Boundary meaning is carried by colour AND dash pattern AND label AND note.
   An approximate boundary must never look legally verified. */
export function BoundaryLegend({ types = ['cadastral', 'surveyed', 'approximate', 'conceptual'], showNotes = true, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-structure)', fontSize: 'var(--type-label-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Boundaries</span>
      {types.map((t) => {
        const d = TYPES[t];
        return (
          <div key={t} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', alignItems: 'center', gap: 'var(--space-3)' }}>
            <svg width="44" height="10" aria-hidden="true"><line x1="0" y1="5" x2="44" y2="5" stroke={d.color} strokeWidth={t === 'cadastral' ? 2 : 1.5} strokeDasharray={d.dash || undefined} /></svg>
            <span style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-primary)' }}>
              {d.label}
              {showNotes && <span style={{ color: 'var(--fg-faint)' }}> · {d.note}</span>}
            </span>
          </div>
        );
      })}
    </div>
  );
}
