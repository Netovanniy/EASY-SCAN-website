import React from 'react';
import { SpecList } from '../content/SpecList.jsx';

export function SpecCard({ title, subtitle, items = [], footer, tone = 'default', dense = true, children, style, ...rest }) {
  const accent = { default: 'transparent', brand: 'var(--accent-coral)', instrument: 'var(--accent-scan)' }[tone];
  return (
    <section style={{ border: 'var(--border-card)', borderRadius: 'var(--radius-card)', background: 'var(--bg-surface)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', ...style }} {...rest}>
      <header style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--type-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase' }}>
          {tone !== 'default' && <span aria-hidden="true" style={{ width: 6, height: 6, background: accent, display: 'inline-block' }} />}
          {title}
        </h3>
        {subtitle && <p style={{ margin: 0, fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-muted)' }}>{subtitle}</p>}
      </header>
      {items.length > 0 && <SpecList items={items} dense={dense} />}
      {children}
      {footer && <footer style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-faint)', paddingTop: 'var(--space-2)' }}>{footer}</footer>}
    </section>
  );
}
