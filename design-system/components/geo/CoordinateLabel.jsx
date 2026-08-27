import React from 'react';

const dms = (v, pos, neg) => {
  const dir = v >= 0 ? pos : neg, a = Math.abs(v);
  const d = Math.floor(a), m = Math.floor((a - d) * 60), s = (((a - d) * 60 - m) * 60).toFixed(1);
  return d + '° ' + String(m).padStart(2, '0') + '′ ' + s + '″ ' + dir;
};

export function CoordinateLabel({ lat, lon, elevation, elevationUnit = 'm MSL', local, system, format = 'decimal', overTerrain = false, style, ...rest }) {
  const text = format === 'dms'
    ? dms(lat, 'N', 'S') + '  ' + dms(lon, 'E', 'W')
    : lat.toFixed(5) + '° ' + (lat >= 0 ? 'N' : 'S') + ', ' + lon.toFixed(5) + '° ' + (lon >= 0 ? 'E' : 'W');
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 2, fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-data)', color: 'var(--fg-primary)', padding: overTerrain ? '5px 8px' : 0, background: overTerrain ? 'rgba(0,0,0,.58)' : 'transparent', ...style }} {...rest}>
      <span>{text}</span>
      {(elevation != null || local) && (
        <span style={{ color: 'var(--fg-secondary)' }}>
          {elevation != null && '+' + elevation + ' ' + elevationUnit}
          {elevation != null && local && '  ·  '}
          {local}
        </span>
      )}
      {system && <span style={{ color: 'var(--fg-faint)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase' }}>{system}</span>}
    </span>
  );
}
