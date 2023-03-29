import React, { memo } from 'react';
import classnames from 'classnames';

// types
import { ValidationType } from './input-wrapper.types';

// styles
import styles from './input-wrapper.module.css';

export type InputProps<Name> = {
  label?: React.ReactNode;
  variant?: 'outline' | 'filled';
  wrapperClassName?: string;
  validation?: ValidationType;
  tip?: React.ReactNode;
  name?: Name;
  onChange?: (value: string, name: Name) => void;
  value?: string | number | null;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

type InputWrapperProps<Name> = InputProps<Name> & {
  id?: string;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  readOnly?: boolean;
};

function InputWrapper<Name>({
  validation = {},
  label,
  wrapperClassName,
  tip,
  id,
  children,
  readOnly,
  startIcon,
  endIcon,
}: InputWrapperProps<Name>) {
  return (
    <div
      className={classnames(styles.wrapper, wrapperClassName, {
        [styles.wrapperReadOnly]: readOnly,
      })}
    >
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {<div className={styles.startIcon}>{startIcon}</div>}
        {children}
        {<div className={styles.endIcon}>{endIcon}</div>}
      </div>

      {(tip || validation.errorMessage) && (
        <div className={styles.errorMessage}>{validation.errorMessage || tip}</div>
      )}
    </div>
  );
}

export default memo(InputWrapper) as typeof InputWrapper;
