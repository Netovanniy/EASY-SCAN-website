/**
 * Lists the terrain and analysis layers currently visible, with their semantic
 * data colours.
 */
export interface TerrainLegendProps {
  /** Layer keys, or objects with label / colour / value overrides. */
  layers: (string | { key: string; label?: string; color?: string; value?: string })[];
  /** @default 1 */
  columns?: 1 | 2 | 3;
  style?: React.CSSProperties;
}
export declare function TerrainLegend(props: TerrainLegendProps): JSX.Element;
