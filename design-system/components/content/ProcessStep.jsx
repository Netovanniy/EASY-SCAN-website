import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

/* The homepage's four-step pattern: noun label — what happens. What that makes
   possible. */
export function ProcessStep({ index, title, children, outcome, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-hairline)', ...style }} {...rest}>
      <Eyebrow index={index}>{'Step'}</Eyebrow>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--type-h4)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{title}</h3>
      <p style={{ margin: 0, color: 'var(--fg-secondary)', fontSize: 'var(--type-body-sm)' }}>{children}</p>
      {outcome && <p style={{ margin: 0, color: 'var(--accent-scan)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-data)' }}>{'→ ' + outcome}</p>}
    </div>
  );
}
