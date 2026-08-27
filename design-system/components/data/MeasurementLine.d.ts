/**
 * Reusable measurement annotation drawn over terrain: endpoint ticks, hairline,
 * mono value and unit.
 */
export interface MeasurementLineProps {
  value: React.ReactNode;
  /** Unit string — never omit. */
  unit?: string;
  /** Chooses the notation prefix (Δ for height, + for elevation). @default "distance" */
  kind?: 'distance' | 'height' | 'elevation' | 'slope' | 'area' | 'volume';
  /** @default "horizontal" */
  orientation?: 'horizontal' | 'vertical';
  /** CSS length of the line. @default "100%" */
  length?: string;
  /** @default "instrument" */
  tone?: 'instrument' | 'neutral';
  style?: React.CSSProperties;
}
export declare function MeasurementLine(props: MeasurementLineProps): JSX.Element;
