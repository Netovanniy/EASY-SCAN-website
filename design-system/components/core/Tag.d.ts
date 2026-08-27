/**
 * Compact metadata chip. Use tone "demo" to label illustrative data, which the
 * brand requires wherever a value is not real.
 */
export interface TagProps {
  children: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'brand' | 'instrument' | 'demo';
  /** Optional unicode technical symbol, e.g. "±" or "→". */
  symbol?: string;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
