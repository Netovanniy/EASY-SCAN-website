/**
 * Declares how a value was obtained. Required beside any figure that is not
 * directly measured.
 */
export interface ConfidenceTagProps {
  /** @default "measured" */
  level?: 'measured' | 'verified' | 'calculated' | 'estimated' | 'approximate' | 'conceptual' | 'unknown' | 'unavailable';
  /** Method or document the value came from. */
  source?: string;
  style?: React.CSSProperties;
}
export declare function ConfidenceTag(props: ConfidenceTagProps): JSX.Element;
