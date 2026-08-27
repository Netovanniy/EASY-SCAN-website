/**
 * Graphic scale bar for maps, terrain graphics, reports and the viewer.
 */
export interface ScaleBarProps {
  /** Real-world length the bar represents. @default 100 */
  length?: number;
  /** @default "m" */
  unit?: string;
  /** Drawn width in px. @default 160 */
  pixels?: number;
  /** Alternating segment count. @default 4 */
  segments?: number;
  /** "light" over dark terrain, "dark" on white paper. @default "light" */
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function ScaleBar(props: ScaleBarProps): JSX.Element;
