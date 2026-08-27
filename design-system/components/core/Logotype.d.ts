/**
 * Official EASY SCAN logo artwork. Renders supplied PNG artwork — never a
 * typographic reconstruction.
 */
export interface LogotypeProps {
  /** Which supplied artwork to render. @default "wordmark" */
  variant?: 'wordmark' | 'monogram' | 'monogram-black';
  /** Rendered width in px. Minimum 140 for wordmark, 48 for monogram. */
  width?: number;
  height?: number;
  /** Prefix for the asset path, e.g. "../../" when the page is nested. @default "" */
  assetBase?: string;
  /** Show the official strapline beneath. @default false */
  strapline?: boolean;
  style?: React.CSSProperties;
}
export declare function Logotype(props: LogotypeProps): JSX.Element;
