/**
 * North arrow. Restrained: a hairline circle, one filled needle, a mono letter.
 */
export interface NorthIndicatorProps {
  /** Rotation in degrees clockwise from screen-up. @default 0 */
  rotation?: number;
  /** @default 34 */
  size?: number;
  /** @default "light" */
  tone?: 'light' | 'dark';
  /** @default "N" */
  label?: string;
  style?: React.CSSProperties;
}
export declare function NorthIndicator(props: NorthIndicatorProps): JSX.Element;
