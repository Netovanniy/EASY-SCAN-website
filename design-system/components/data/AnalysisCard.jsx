import React from 'react';
import { ConfidenceTag } from './ConfidenceTag.jsx';

export function AnalysisCard({ analysis, result, unit, interpretation, ramp, rampLabels, level = 'calculated', source, visual, style, ...rest }) {
  return (
    <section style={{ border: 'var(--border-card)', borderRadius: 'var(--radius-card)', background: 'var(--bg-surface)', display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      {visual && <div style={{ borderBottom: '1px solid var(--border-faint)' }}>{visual}</div>}
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--type-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-secondary)' }}>{analysis}</h3>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, fontFamily: 'var(--font-information)' }}>
          <span style={{ fontSize: 'var(--type-data-xl)', lineHeight: 1 }}>{result}</span>
          {unit && <span style={{ fontSize: 'var(--type-body)', color: 'var(--fg-muted)' }}>{unit}</span>}
        </div>
        {ramp && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ height: 6, background: ramp, display: 'block' }} />
            {rampLabels && (
              <span style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-faint)' }}>
                {rampLabels.map((l) => <span key={l}>{l}</span>)}
              </span>
            )}
          </div>
        )}
        {interpretation && <p style={{ margin: 0, fontSize: 'var(--type-body-sm)', color: 'var(--fg-secondary)' }}>{interpretation}</p>}
        <ConfidenceTag level={level} source={source} />
      </div>
    </section>
  );
}
