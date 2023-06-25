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
  wrapperClassName?: string;
  children: React.ReactNode;
  readOnly?: boolean;
  loading?: boolean;
  isError?: boolean;
};

export default function InputWrapper(props: Props) {
  const { wrapperClassName, children, readOnly, loading, isError = false } = props;

  return (
    <InputWrapperContext.Provider value={{ isError }}>
      <div
        className={classnames(styles.wrapper, wrapperClassName, {
          [styles.wrapperReadOnly]: readOnly,
        })}
      >
        {loading || children}
      </div>
    </InputWrapperContext.Provider>
  );
}

InputWrapper.Input = Input;
InputWrapper.Label = Label;
InputWrapper.Tip = Tip;
InputWrapper.Icon = Icon;
