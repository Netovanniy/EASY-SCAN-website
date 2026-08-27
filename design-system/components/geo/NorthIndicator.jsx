import React from 'react';

export function NorthIndicator({ rotation = 0, size = 34, tone = 'light', label = 'N', style, ...rest }) {
  const color = tone === 'light' ? 'var(--fg-primary)' : 'var(--n-000)';
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 3, ...style }} {...rest}
      role="img" aria-label={'North, rotated ' + rotation + ' degrees'}>
      <svg width={size} height={size} viewBox="0 0 34 34" style={{ transform: 'rotate(' + rotation + 'deg)' }} aria-hidden="true">
        <circle cx="17" cy="17" r="16" fill="none" stroke={color} strokeOpacity="0.35" />
        <line x1="17" y1="3" x2="17" y2="31" stroke={color} strokeOpacity="0.35" />
        <path d="M17 4 L21 17 L17 14 L13 17 Z" fill={color} />
      </svg>
      <span style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', color }}>{label}</span>
    </div>
  );
}
