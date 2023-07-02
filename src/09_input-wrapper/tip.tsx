import React from 'react';
import classNames from 'classnames';

// state context
import { useInputWrapperContext } from './inputWrapperContext';

// styles
import styles from './input-wrapper.module.css';

type Props = {
  text: string;
};

export function Tip(props: Props) {
  const { text } = props;

  const { isError, disabled } = useInputWrapperContext();

  return (
    <div
      className={classNames(styles.label, {
        [styles.errorMessage]: isError,
        [styles.tipDisabled]: disabled,
      })}
    >
      {text}
    </div>
  );
}

/** tip for InputWrapper */
export default Tip;
