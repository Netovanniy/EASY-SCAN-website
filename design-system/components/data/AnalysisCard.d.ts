/**
 * Derived terrain analysis: what was analysed, the result with units, what it
 * means for the site, and how confident the figure is.
 */
export interface AnalysisCardProps {
  /** What was analysed, e.g. "Slope distribution". */
  analysis: string;
  result: React.ReactNode;
  /** Units — required for any spatial result. */
  unit?: string;
  /** One sentence on what this means for the project. */
  interpretation?: string;
  /** CSS gradient for the legend strip, e.g. var(--slope-ramp). */
  ramp?: string;
  /** Tick labels beneath the ramp. */
  rampLabels?: string[];
  /** @default "calculated" */
  level?: 'measured' | 'verified' | 'calculated' | 'estimated' | 'approximate' | 'conceptual';
  source?: string;
  /** Map, terrain or chart visual above the text. */
  visual?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function AnalysisCard(props: AnalysisCardProps): JSX.Element;
