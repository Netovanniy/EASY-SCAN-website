import React from 'react';

const SWATCH = {
  contours: 'var(--contour-major)', elevation: 'var(--elev-4)', slope: 'var(--slope-2)',
  vegetation: 'var(--data-vegetation)', water: 'var(--data-water)', buildings: 'var(--data-existing-structure)',
  proposed: 'var(--data-proposed)', roads: 'var(--data-road)', pointcloud: 'var(--data-pointcloud)',
  coverage: 'var(--data-measure)', terrain: 'var(--data-terrain)'
};

export function TerrainLegend({ layers = [], columns = 1, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-structure)', fontSize: 'var(--type-label-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Active layers</span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))', gap: '10px var(--space-6)' }}>
        {layers.map((l) => {
          const key = typeof l === 'string' ? l : l.key;
          const label = (typeof l === 'object' && l.label) || key;
          return (
            <span key={key} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-primary)' }}>
              <span aria-hidden="true" style={{ width: 12, height: 12, flex: '0 0 12px', background: (typeof l === 'object' && l.color) || SWATCH[key] || 'var(--fg-muted)', border: '1px solid var(--border-faint)' }} />
              <span style={{ textTransform: 'capitalize' }}>{label}</span>
              {typeof l === 'object' && l.value && <span style={{ color: 'var(--fg-faint)' }}>{l.value}</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
