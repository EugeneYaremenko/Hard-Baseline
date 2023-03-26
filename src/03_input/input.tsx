import React, { useId } from 'react';
import classnames from 'classnames';

// const
import { VALIDATION_RULES } from './input.consts';

// styles
import styles from './input.module.css';

type Props = {
  name: string;
  value: string;
  type: React.HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  required?: boolean;
  placeholder?: string;
  validationRule?: string;
  validationTitle?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  variant?: 'default' | 'outline'; // only styles change
};

function Input(props: Props) {
  const {
    id,
    type,
    name,
    value,
    inputRef,
    placeholder,
    validationRule,
    onChange,
    required = false,
    variant = 'default',
    validationTitle = 'invalid value :(',
  } = props;

  const inputId = useId();

  return (
    <input
      name={name}
      type={type}
      value={value}
      ref={inputRef}
      id={id || inputId}
      required={required}
      onChange={onChange}
      title={validationTitle}
      placeholder={placeholder}
      pattern={validationRule || VALIDATION_RULES[type]}
      className={classnames(styles.input, styles[variant])}
    />
  );
}

/** Default app input */
export default React.memo(Input);
