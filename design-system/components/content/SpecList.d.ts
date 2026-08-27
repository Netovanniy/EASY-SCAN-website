/**
 * Label/value specification rows — deliverables, methodology, equipment.
 */
export interface SpecItem { label: string; value: React.ReactNode; unit?: string; note?: string }
export interface SpecListProps {
  items: SpecItem[];
  /** @default 1 */
  columns?: 1 | 2;
  /** Tighter rows for data-mode surfaces. @default false */
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function SpecList(props: SpecListProps): JSX.Element;
