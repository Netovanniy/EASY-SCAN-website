import React from 'react';

const PAD = { sm: '0 14px', md: '0 20px', lg: '0 28px' };
const H = { sm: 'var(--control-h-sm)', md: 'var(--control-h)', lg: 'var(--control-h-lg)' };

export function Button({ variant = 'primary', size = 'md', disabled, full, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const base = {
    appearance: 'none', border: '1px solid transparent', borderRadius: 'var(--radius-control)',
    font: 'inherit', fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-medium)',
    fontSize: size === 'sm' ? 'var(--type-label-sm)' : 'var(--type-label)',
    letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
    height: H[size], padding: PAD[size], display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined, alignItems: 'center', justifyContent: 'center',
    gap: 'var(--space-2)', cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1, whiteSpace: 'nowrap',
    transform: down && !disabled ? 'scale(var(--press-scale))' : 'none',
    transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-instant) var(--ease-standard)'
  };
  const skins = {
    primary: { background: hover && !disabled ? 'var(--n-white)' : 'var(--accent-coral)', color: 'var(--n-000)' },
    secondary: { background: 'transparent', color: 'var(--fg-primary)', borderColor: hover && !disabled ? 'var(--border-strong)' : 'var(--border-hairline)' },
    ghost: { background: 'transparent', color: hover && !disabled ? 'var(--fg-primary)' : 'var(--fg-secondary)' },
    instrument: { background: hover && !disabled ? 'var(--accent-scan)' : 'var(--accent-scan-tint)', color: hover && !disabled ? 'var(--n-000)' : 'var(--accent-scan)', borderColor: 'var(--accent-scan-dim)', fontFamily: 'var(--font-information)', textTransform: 'none', letterSpacing: 'var(--tracking-data)' }
  };
  return (
    <button type="button" disabled={disabled} style={{ ...base, ...skins[variant], ...style }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)} {...rest}>
      {children}
    </button>
  );
}
