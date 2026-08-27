/**
 * Hypsometric elevation legend. Min, max, interval, unit and datum are all
 * required — an elevation ramp without them is decoration.
 */
export interface ElevationLegendProps {
  min: number;
  max: number;
  /** Contour / colour-step interval. */
  interval: number;
  /** @default "m" */
  unit?: string;
  /** Vertical reference, e.g. "MSL". @default "MSL" */
  datum?: string;
  /** CSS gradient. @default "var(--elev-ramp)" */
  ramp?: string;
  /** @default "horizontal" */
  orientation?: 'horizontal' | 'vertical';
  /** Explicit tick values; defaults to min / mid / max. */
  ticks?: (number | string)[];
  style?: React.CSSProperties;
}
export declare function ElevationLegend(props: ElevationLegendProps): JSX.Element;
