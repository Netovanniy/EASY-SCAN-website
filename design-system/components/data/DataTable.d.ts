/**
 * Technical table for reports and data views. Units live in the column header,
 * not repeated in every cell.
 */
export interface DataColumn { key: string; label: string; unit?: string; align?: 'left' | 'right' | 'center'; muted?: boolean }
export interface DataTableProps {
  columns: DataColumn[];
  rows: Record<string, React.ReactNode>[];
  /** Uppercase mono caption above the table. */
  caption?: string;
  /** @default false */
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
