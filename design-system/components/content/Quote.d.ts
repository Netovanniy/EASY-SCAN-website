/**
 * Client or engineer statement. Light TacticSans over a hairline rule; no
 * decorative quote marks.
 */
export interface QuoteProps {
  children: React.ReactNode;
  attribution?: string;
  role?: string;
  /** @default "md" */
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function Quote(props: QuoteProps): JSX.Element;
