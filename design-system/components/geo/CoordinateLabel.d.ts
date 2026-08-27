/**
 * Mono coordinate readout, legible over photography, maps, point clouds and
 * terrain models.
 */
export interface CoordinateLabelProps {
  lat: number;
  lon: number;
  /** Elevation value. */
  elevation?: number;
  /** @default "m MSL" */
  elevationUnit?: string;
  /** Local / site grid coordinate string, e.g. "E 412.8  N 208.4". */
  local?: string;
  /** Coordinate reference system, e.g. "WGS 84 / UTM 47N". */
  system?: string;
  /** @default "decimal" */
  format?: 'decimal' | 'dms';
  /** Adds a dark plate so it reads over imagery. @default false */
  overTerrain?: boolean;
  style?: React.CSSProperties;
}
export declare function CoordinateLabel(props: CoordinateLabelProps): JSX.Element;
