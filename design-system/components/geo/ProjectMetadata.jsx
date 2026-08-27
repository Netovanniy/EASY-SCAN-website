import React from 'react';
import { StatusPill } from '../data/StatusPill.jsx';
import { ConfidenceTag } from '../data/ConfidenceTag.jsx';

const ORDER = ['project', 'location', 'area', 'captureDate', 'technology', 'accuracy', 'deliverables', 'coordinateSystem'];
const LABELS = {
  project: 'Project', location: 'Location', area: 'Area', captureDate: 'Capture date',
  technology: 'Technology', accuracy: 'Accuracy', deliverables: 'Deliverables', coordinateSystem: 'Coordinate system'
};

/* Only render the fields the context actually needs — do not pad. */
export function ProjectMetadata({ layout = 'list', status, confidence, confidenceSource, demo = false, style, ...rest }) {
  const data = rest;
  const fields = ORDER.filter((k) => data[k] != null);
  const grid = layout === 'grid';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', ...style }}>
      {(status || demo) && (
        <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
          {status && <StatusPill status={status} />}
          {demo && <span style={{ fontFamily: 'var(--font-information)', fontSize: 'var(--type-data-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--status-estimated)', border: '1px solid var(--status-estimated)', padding: '3px 8px' }}>Demo data</span>}
        </div>
      )}
      <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: grid ? 'repeat(auto-fit,minmax(180px,1fr))' : '1fr', gap: grid ? 'var(--space-5)' : 0 }}>
        {fields.map((k) => (
          <div key={k} style={grid
            ? { display: 'flex', flexDirection: 'column', gap: 4 }
            : { display: 'grid', gridTemplateColumns: 'minmax(120px,34%) 1fr', gap: 'var(--space-4)', padding: '9px 0', borderBottom: '1px solid var(--border-faint)' }}>
            <dt style={{ fontFamily: 'var(--font-structure)', fontSize: 'var(--type-label-sm)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{LABELS[k]}</dt>
            <dd style={{ margin: 0, fontFamily: 'var(--font-information)', fontSize: 'var(--type-data)', color: 'var(--fg-primary)' }}>{Array.isArray(data[k]) ? data[k].join(' · ') : data[k]}</dd>
          </div>
        ))}
      </dl>
      {confidence && <ConfidenceTag level={confidence} source={confidenceSource} />}
    </div>
  );
}
