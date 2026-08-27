/**
 * Project tile: terrain image with location, uppercase title and technology tags.
 */
export interface MediaTitleCardProps {
  src: string;
  title: string;
  /** Island / site, uppercase mono. */
  location?: string;
  /** @default "4 / 3" */
  ratio?: string;
  /** Technology or deliverable tags. */
  tags?: string[];
  /** Mono line beneath the frame — capture date, area, status. */
  meta?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function MediaTitleCard(props: MediaTitleCardProps): JSX.Element;
