import React from 'react';

/* Terrain is the hero. Hard rectangle, no radius, gradient scrim for
   protection — never a blurred capsule over the land. */
export function TerrainFrame({ src, alt = '', ratio = '16 / 9', scrim = 'bottom', overlay, caption, coordinates, grid = false, children, style, ...rest }) {
  const scrims = { none: 'none', bottom: 'var(--scrim-bottom)', top: 'var(--scrim-top)', flat: 'var(--scrim-flat)' };
  return (
    <figure style={{ margin: 0, position: 'relative', aspectRatio: ratio, overflow: 'hidden', borderRadius: 'var(--radius-frame)', background: 'var(--bg-inset)', ...style }} {...rest}>
      {src && <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
      {grid && <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(61,227,166,.18) 1px,transparent 1px) 0 0/100% 40px,linear-gradient(90deg,rgba(61,227,166,.18) 1px,transparent 1px) 0 0/40px 100%' }} />}
      {scrim !== 'none' && <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: scrims[scrim] }} />}
      {overlay}
      {coordinates && (
        <span style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-data)', color: 'var(--fg-primary)', textShadow: '0 1px 3px rgba(0,0,0,.8)' }}>{coordinates}</span>
      )}
      {children && <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--space-6)' }}>{children}</div>}
      {caption && (
        <figcaption style={{ position: 'absolute', bottom: 'var(--space-3)', right: 'var(--space-4)', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-secondary)', textShadow: '0 1px 3px rgba(0,0,0,.8)' }}>{caption}</figcaption>
      )}
    </figure>
  );
}
