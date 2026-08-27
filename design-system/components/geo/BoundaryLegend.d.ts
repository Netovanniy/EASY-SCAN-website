/**
 * Explains boundary types. Each entry is encoded by colour, line weight, dash
 * pattern, label and a plain-language confidence note.
 */
export interface BoundaryLegendProps {
  /** Which types are present on the drawing. @default all four */
  types?: ('cadastral' | 'surveyed' | 'approximate' | 'conceptual')[];
  /** Show the plain-language note after each label. @default true */
  showNotes?: boolean;
  style?: React.CSSProperties;
}
export declare function BoundaryLegend(props: BoundaryLegendProps): JSX.Element;
