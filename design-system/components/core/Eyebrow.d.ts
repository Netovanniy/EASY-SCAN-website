/**
 * Tracked uppercase label that sits above a heading, optionally numbered.
 */
export interface EyebrowProps {
  children: React.ReactNode;
  /** Zero-padded step number, as in the homepage 4-step process. */
  index?: number | string;
  /** @default "default" */
  tone?: 'default' | 'accent' | 'instrument';
  /** Extend a hairline rule to the right. @default false */
  rule?: boolean;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
