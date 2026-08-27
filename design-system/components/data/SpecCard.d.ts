/**
 * Thin-bordered flat panel holding technical specifications or project metadata.
 */
export interface SpecCardProps {
  title: string;
  subtitle?: string;
  items?: { label: string; value: React.ReactNode; unit?: string; note?: string }[];
  /** Mono source / confidence line at the bottom. */
  footer?: React.ReactNode;
  /** A 6px accent square beside the title. @default "default" */
  tone?: 'default' | 'brand' | 'instrument';
  /** @default true */
  dense?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SpecCard(props: SpecCardProps): JSX.Element;
