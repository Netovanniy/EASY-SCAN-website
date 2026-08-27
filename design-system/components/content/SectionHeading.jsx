import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

export function SectionHeading({ eyebrow, index, title, lead, align = 'left', level = 2, size = 'h2', style, ...rest }) {
  const Tag = 'h' + level;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align, ...style }} {...rest}>
      {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
      <Tag style={{ margin: 0, fontSize: 'var(--type-' + size + ')', fontFamily: 'var(--font-structure)', fontWeight: 'var(--weight-medium)', textTransform: 'uppercase', letterSpacing: '0.02em', maxWidth: '22ch' }}>{title}</Tag>
      {lead && <p style={{ margin: 0, color: 'var(--fg-secondary)', fontSize: 'var(--type-body-l)', maxWidth: 'var(--measure-lead)' }}>{lead}</p>}
    </div>
  );
}
