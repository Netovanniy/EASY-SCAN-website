/**
 * Canonical project information block. Show only the fields relevant to the
 * context; mark illustrative content with `demo`.
 */
export interface ProjectMetadataProps {
  project?: string;
  location?: string;
  /** Include the unit, e.g. "12.4 ha". */
  area?: string;
  captureDate?: string;
  /** One or several capture technologies. */
  technology?: string | string[];
  /** Stated accuracy, e.g. "±25 mm vertical". Never invent this value. */
  accuracy?: string;
  deliverables?: string | string[];
  /** e.g. "WGS 84 / UTM 47N". */
  coordinateSystem?: string;
  /** @default "list" */
  layout?: 'list' | 'grid';
  status?: 'scheduled' | 'captured' | 'processing' | 'ready' | 'updated';
  confidence?: 'measured' | 'verified' | 'calculated' | 'estimated' | 'approximate' | 'conceptual';
  confidenceSource?: string;
  /** Renders a DEMO DATA badge. Required whenever values are illustrative. @default false */
  demo?: boolean;
  style?: React.CSSProperties;
}
export declare function ProjectMetadata(props: ProjectMetadataProps): JSX.Element;
