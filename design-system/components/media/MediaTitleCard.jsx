import React from 'react';
import { TerrainFrame } from './TerrainFrame.jsx';
import { Tag } from '../core/Tag.jsx';

export function MediaTitleCard({ src, title, location, ratio = '4 / 3', tags = [], meta, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'block', color: 'inherit', textDecoration: 'none', ...style }}
      onFocus={() => setHover(true)} onBlur={() => setHover(false)} {...rest}>
      <TerrainFrame src={src} alt={title} ratio={ratio} scrim="bottom"
        style={{ outline: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-faint)'), transition: 'outline-color var(--dur-fast) var(--ease-standard)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {location && <span style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: hover ? 'var(--accent-coral)' : 'var(--fg-secondary)' }}>{location}</span>}
          <span style={{ fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--type-h3)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{title}</span>
          {tags.length > 0 && <span style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>{tags.map((t) => <Tag key={t}>{t}</Tag>)}</span>}
        </div>
      </TerrainFrame>
      {meta && <div style={{ marginTop: 'var(--space-3)', fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', color: 'var(--fg-muted)' }}>{meta}</div>}
    </a>
  );
}
