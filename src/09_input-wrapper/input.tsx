import React from 'react';
import classnames from 'classnames';

// state context
import { useInputWrapperContext } from './inputWrapperContext';

// styles
import styles from './input-wrapper.module.css';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<HTMLInputElement>;
  variant?: 'default' | 'outline'; // only styles change
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'className'>; // all input props without style & className

function Input(inputProps: Props) {
  const { inputRef, variant = 'default', onChange, ...props } = inputProps;

  const { isError } = useInputWrapperContext();

  return (
    <input
      {...props}
      ref={inputRef}
      onChange={onChange}
      className={classnames(styles.input, styles[variant], {
        [styles.inputError]: isError,
      })}
    />
  );
}

/** input for InputWrapper */
export default React.memo(Input);
