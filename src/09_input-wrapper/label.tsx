import React from 'react';
import classNames from 'classnames';

// state context
import { useInputWrapperContext } from './inputWrapperContext';

// styles
import styles from './input-wrapper.module.css';

type Props = {
  text: string;
  id: string | number;
};

function Label(props: Props) {
  const { id, text } = props;

  const { isError } = useInputWrapperContext();

  return (
    <label
      className={classNames(styles.label, {
        [styles.labelError]: isError,
      })}
      htmlFor={id.toString()}
    >
      {text}
    </label>
  );
}

/** label for InputWrapper */
export default Label;
