import React from 'react';
import classnames from 'classnames';

// state context
import { useInputWrapperContext } from './inputWrapperContext';

// styles
import styles from './input-wrapper.module.css';

type Props = {
  inputRef?: React.Ref<HTMLInputElement>;
  variant?: 'default' | 'outline'; // only styles change
  pattern?: RegExp | string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'className'>; // all input props without style & className

function Input(inputProps: Props) {
  const { inputRef, variant = 'default', pattern, ...props } = inputProps;

  const { isError, disabled, onChange } = useInputWrapperContext();

  return (
    <input
      {...props}
      disabled={disabled}
      ref={inputRef}
      pattern={pattern}
      onChange={onChange}
      className={classnames(styles.input, styles[variant], {
        [styles.inputError]: isError,
      })}
    />
  );
}

/** input for InputWrapper */
export default React.memo(Input);
