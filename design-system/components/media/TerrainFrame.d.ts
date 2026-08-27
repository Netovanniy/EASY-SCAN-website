/**
 * The primary media container: full-bleed terrain imagery with a gradient
 * scrim, optional scan grid and coordinate stamp.
 */
export interface TerrainFrameProps {
  src?: string;
  alt?: string;
  /** CSS aspect-ratio. @default "16 / 9" */
  ratio?: string;
  /** Protection gradient. @default "bottom" */
  scrim?: 'none' | 'bottom' | 'top' | 'flat';
  /** Absolutely-positioned analytical overlay (contours, boundaries, measurements). */
  overlay?: React.ReactNode;
  /** Short mono credit or source note, bottom right. */
  caption?: string;
  /** Mono coordinate stamp, top left. */
  coordinates?: string;
  /** Draw the scan grid motif over the image. Use only when it means coverage. @default false */
  grid?: boolean;
  /** Content anchored to the bottom of the frame. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function TerrainFrame(props: TerrainFrameProps): JSX.Element;
