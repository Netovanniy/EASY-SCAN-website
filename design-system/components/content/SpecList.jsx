import React from 'react';

export function SpecList({ items = [], columns = 1, dense = false, style, ...rest }) {
  return (
    <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))', columnGap: 'var(--space-6)', ...style }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'minmax(120px,38%) 1fr', gap: 'var(--space-4)', padding: (dense ? '7px' : '11px') + ' 0', borderBottom: '1px solid var(--border-faint)' }}>
          <dt style={{ fontFamily: 'var(--font-structure)', fontSize: 'var(--type-label-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{it.label}</dt>
          <dd style={{ margin: 0, fontFamily: 'var(--font-information)', fontSize: 'var(--type-data)', color: 'var(--fg-primary)', display: 'flex', gap: 'var(--space-2)', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <span>{it.value}</span>
            {it.unit && <span style={{ color: 'var(--fg-muted)' }}>{it.unit}</span>}
            {it.note && <span style={{ color: 'var(--fg-faint)', fontSize: 'var(--type-data-sm)' }}>{it.note}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
