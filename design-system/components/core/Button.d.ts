/**
 * EASY SCAN action control. Uppercase TacticSans, 2px radius, colour-only hover.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = coral CTA · secondary = hairline outline · ghost = text · instrument = mono control inside viewers. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'instrument';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Stretch to container width. @default false */
  full?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
