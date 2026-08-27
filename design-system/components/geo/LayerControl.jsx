import React from 'react';

/* Written for architects and landowners, not GIS specialists: plain names,
   optional one-line explanation, grouped by what the layer represents. */
export function LayerControl({ groups = [], active = {}, onToggle, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', ...style }} {...rest}>
      {groups.map((g) => (
        <section key={g.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <h4 style={{ margin: '0 0 4px', fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--type-label-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{g.title}</h4>
          {g.layers.map((l) => {
            const on = !!active[l.key];
            return (
              <button key={l.key} type="button" onClick={() => onToggle && onToggle(l.key)}
                style={{ appearance: 'none', textAlign: 'left', background: on ? 'rgba(255,255,255,.045)' : 'transparent', border: '1px solid ' + (on ? 'var(--border-hairline)' : 'transparent'), borderRadius: 'var(--radius-1)', padding: '8px 10px', cursor: 'pointer', display: 'grid', gridTemplateColumns: '14px 1fr auto', alignItems: 'center', gap: 'var(--space-3)', color: 'inherit', transition: 'background var(--dur-fast) var(--ease-standard)' }}>
                <span aria-hidden="true" style={{ width: 12, height: 12, border: '1px solid ' + (on ? (l.color || 'var(--accent-scan)') : 'var(--border-strong)'), background: on ? (l.color || 'var(--accent-scan)') : 'transparent' }} />
                <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <span style={{ fontFamily: 'var(--font-structure)', fontSize: 'var(--type-label)', color: on ? 'var(--fg-primary)' : 'var(--fg-secondary)' }}>{l.label}</span>
                  {l.hint && <span style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-faint)' }}>{l.hint}</span>}
                </span>
                {l.meta && <span style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-faint)' }}>{l.meta}</span>}
              </button>
            );
          })}
        </section>
      ))}
    </div>
  );
}
