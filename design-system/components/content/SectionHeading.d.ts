/**
 * Section opener: numbered eyebrow, uppercase TacticSans title, mono lead.
 */
export interface SectionHeadingProps {
  eyebrow?: string;
  index?: number | string;
  title: React.ReactNode;
  /** Sentence-case supporting sentence in Andale Mono. */
  lead?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Heading element level. @default 2 */
  level?: 1 | 2 | 3;
  /** Type scale token. @default "h2" */
  size?: 'h1' | 'h2' | 'h3';
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
