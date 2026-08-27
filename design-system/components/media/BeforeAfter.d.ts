/**
 * Draggable comparison seam for the brand's core transitions: physical/digital,
 * existing/proposed, raw/analysed.
 */
export interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  /** @default "Existing" */
  beforeLabel?: string;
  /** @default "Proposed" — rendered coral, the proposed-architecture data colour. */
  afterLabel?: string;
  /** @default "16 / 9" */
  ratio?: string;
  /** Starting seam position, 0–100. @default 50 */
  initial?: number;
  style?: React.CSSProperties;
}
export declare function BeforeAfter(props: BeforeAfterProps): JSX.Element;
