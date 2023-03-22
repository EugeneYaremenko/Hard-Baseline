/** global type for button */
export type GlobalButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (...args: unknown[]) => Promise<unknown> | void;
  children?: React.ReactNode;
};
