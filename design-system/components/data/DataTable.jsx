import React from 'react';

/* Mono throughout, hairline rows, numeric columns right-aligned and
   tabular-figure aligned. Works identically in light mode. */
export function DataTable({ columns = [], rows = [], caption, dense = false, style, ...rest }) {
  const pad = dense ? '7px 12px' : '11px 16px';
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data)', ...style }} {...rest}>
      {caption && <caption style={{ captionSide: 'top', textAlign: 'left', paddingBottom: 'var(--space-3)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{caption}</caption>}
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key} scope="col" style={{ padding: pad, textAlign: c.align || 'left', fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-regular)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-muted)', borderBottom: '1px solid var(--border-hairline)', whiteSpace: 'nowrap' }}>
              {c.label}{c.unit && <span style={{ color: 'var(--fg-faint)' }}> ({c.unit})</span>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {columns.map((c) => (
              <td key={c.key} style={{ padding: pad, textAlign: c.align || 'left', borderBottom: '1px solid var(--border-faint)', color: c.muted ? 'var(--fg-muted)' : 'var(--fg-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
