/**
 * One numbered step of the EASY SCAN process, with the measurable outcome it
 * unlocks.
 */
export interface ProcessStepProps {
  index: number | string;
  title: string;
  /** What happens, sentence case. */
  children: React.ReactNode;
  /** What is now measurable or decidable as a result. */
  outcome?: string;
  style?: React.CSSProperties;
}
export declare function ProcessStep(props: ProcessStepProps): JSX.Element;
