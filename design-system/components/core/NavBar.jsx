import React from 'react';
import { Logotype } from './Logotype.jsx';

export function NavBar({ items = [], active, onSelect, languages = ['EN', 'ไทย'], language = 'EN', onLanguage, assetBase = '', transparent = false, style, ...rest }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', padding: '18px var(--gutter-desktop)', background: transparent ? 'transparent' : 'var(--bg-page)', borderBottom: transparent ? '1px solid transparent' : '1px solid var(--border-faint)', ...style }} {...rest}>
      <Logotype variant="wordmark" width={186} assetBase={assetBase} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        {items.map((it) => {
          const label = typeof it === 'string' ? it : it.label;
          const on = active === label;
          return (
            <a key={label} href={(typeof it === 'object' && it.href) || '#'}
              onClick={(e) => { if (onSelect) { e.preventDefault(); onSelect(label); } }}
              style={{ fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-regular)', fontSize: 'var(--type-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: on ? 'var(--accent-coral)' : 'var(--fg-primary)' }}>
              {label}
            </a>
          );
        })}
        <span style={{ display: 'flex', gap: 'var(--space-2)', paddingLeft: 'var(--space-4)', borderLeft: '1px solid var(--border-hairline)' }}>
          {languages.map((l) => (
            <button key={l} type="button" onClick={() => onLanguage && onLanguage(l)}
              style={{ background: 'none', border: 0, cursor: 'pointer', padding: '2px 4px', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', color: l === language ? 'var(--fg-primary)' : 'var(--fg-faint)' }}>
              {l}
            </button>
          ))}
        </span>
      </nav>
    </header>
  );
}
