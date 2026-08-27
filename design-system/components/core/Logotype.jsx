import React from 'react';

const SRC = {
  wordmark: 'assets/logo-wordmark-white-alpha.png',
  monogram: 'assets/logo-es-white.png',
  'monogram-black': 'assets/logo-es-black.png'
};

/* Official EASY SCAN artwork only — never retype the logo in ABNES. */
export function Logotype({ variant = 'wordmark', width, height, assetBase = '', strapline = false, style, ...rest }) {
  const src = assetBase + (SRC[variant] || SRC.wordmark);
  const isWord = variant === 'wordmark';
  const w = width || (isWord ? 220 : 96);
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }} {...rest}>
      <img src={src} alt="EASY SCAN" width={w} height={height} style={{ width: w, height: height || 'auto', display: 'block' }} />
      {strapline && (
        <span style={{ fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-regular)', fontSize: 'var(--type-label-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-secondary)' }}>
          Your digital partner in land analysis and development insight
        </span>
      )}
    </span>
  );
}
