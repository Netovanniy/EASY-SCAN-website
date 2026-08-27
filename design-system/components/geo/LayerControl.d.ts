/**
 * Layer switcher for the terrain viewer, grouped and written in plain language.
 */
export interface LayerDef { key: string; label: string; /** Plain-language explanation for non-GIS users. */ hint?: string; /** Semantic data colour for the swatch. */ color?: string; /** Mono right-aligned detail, e.g. "1 m". */ meta?: string }
export interface LayerControlProps {
  groups: { title: string; layers: LayerDef[] }[];
  /** Map of layer key → visible. */
  active?: Record<string, boolean>;
  onToggle?: (key: string) => void;
  style?: React.CSSProperties;
}
export declare function LayerControl(props: LayerControlProps): JSX.Element;
