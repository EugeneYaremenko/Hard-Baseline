import React from 'react';
import classnames from 'classnames';

// state context
import InputWrapperContext from './inputWrapperContext';

// children components
import Input from './input';
import Label from './label';
import Tip from './tip';
import Icon from './icon';

// styles
import styles from './input-wrapper.module.css';

export type Props = {
  isError?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  wrapperClassName?: string;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

export default function InputWrapper(props: Props) {
  const {
    children,
    wrapperClassName,
    isError = false,
    disabled = false,
    isLoading = false,
    onChange,
  } = props;

  return (
    <InputWrapperContext.Provider value={{ isError, disabled, onChange }}>
      <div
        className={classnames(styles.wrapper, wrapperClassName, {
          [styles.wrapperReadOnly]: disabled,
        })}
      >
        {isLoading || children}
      </div>
    </InputWrapperContext.Provider>
  );
}

InputWrapper.Tip = Tip;
InputWrapper.Icon = Icon;
InputWrapper.Input = Input;
InputWrapper.Label = Label;
