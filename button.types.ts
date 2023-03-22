export type FilledButtonAppearanceType =
  | 'success' /** Зелёный */
  | 'warning' /** Оранжевый */
  | 'dark' /** Тёмный */
  | 'light' /** Светлый */
  | 'danger' /** Красный */
  | 'info' /** Синий */
  | 'info-dark'; /** Темно синий */

export type BorderedButtonAppearanceType = 'light' | 'dark';

export type CommonButtonAppearanceType = FilledButtonAppearanceType | BorderedButtonAppearanceType;

export type StyledButtonSizeType = 'S' | 'M' | 'L';

/** глобальный тип для кнопки */
export type GlobalButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (...args: unknown[]) => Promise<unknown> | void;
  children?: React.ReactNode;
};
