import React from 'react';
import classnames from 'classnames';

// styles
import styles from './input.module.css';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<HTMLInputElement>;
  variant?: 'default' | 'outline'; // only styles change
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'className'>; // all input props without style & className

function Input(inputProps: Props) {
  const { inputRef, variant = 'default', onChange, ...props } = inputProps;

  return (
    <input
      {...props}
      ref={inputRef}
      onChange={onChange}
      className={classnames(styles.input, styles[variant])}
    />
  );
}

/** Default app input */
export default React.memo(Input);
