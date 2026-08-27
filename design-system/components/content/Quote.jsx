import React from 'react';

export function Quote({ children, attribution, role, size = 'md', style, ...rest }) {
  const fs = size === 'lg' ? 'var(--type-h2)' : 'var(--type-h3)';
  return (
    <figure style={{ margin: 0, borderTop: '1px solid var(--border-hairline)', paddingTop: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', ...style }} {...rest}>
      <blockquote style={{ margin: 0, fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-light)', fontSize: fs, lineHeight: 1.28, maxWidth: '30ch' }}>{children}</blockquote>
      {(attribution || role) && (
        <figcaption style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-muted)', letterSpacing: 'var(--tracking-data)' }}>
          {attribution}{role && <span style={{ color: 'var(--fg-faint)' }}> — {role}</span>}
        </figcaption>
      )}
    </figure>
  );
}
