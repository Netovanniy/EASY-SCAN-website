/**
 * A single measured figure: mono value, unit, uppercase label, optional source note.
 */
export interface StatBlockProps {
  value: React.ReactNode;
  /** Unit string — required whenever the figure describes real land. */
  unit?: string;
  label: string;
  /** Source, method or confidence note. */
  note?: string;
  /** @default "default" */
  tone?: 'default' | 'instrument' | 'brand';
  /** @default "left" */
  align?: 'left' | 'right';
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
