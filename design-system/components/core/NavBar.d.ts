/**
 * Site header: wordmark left, uppercase links right, EN/ไทย switch last —
 * the live lidareasyscan.com arrangement.
 */
export interface NavBarProps {
  /** Link labels, or objects with href. */
  items?: (string | { label: string; href?: string })[];
  /** Label of the current page — rendered coral. */
  active?: string;
  onSelect?: (label: string) => void;
  /** @default ["EN","ไทย"] */
  languages?: string[];
  language?: string;
  onLanguage?: (l: string) => void;
  /** Prefix for logo asset path. @default "" */
  assetBase?: string;
  /** Sit over a full-bleed hero with no background or border. @default false */
  transparent?: boolean;
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
