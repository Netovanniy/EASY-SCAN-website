/**
 * Scan lifecycle state. Encodes state as symbol + word + colour, never colour alone.
 */
export interface StatusPillProps {
  /** @default "ready" */
  status?: 'scheduled' | 'captured' | 'processing' | 'ready' | 'updated';
  /** Override the default word. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function StatusPill(props: StatusPillProps): JSX.Element;
