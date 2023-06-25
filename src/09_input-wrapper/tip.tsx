import React from 'react';

// state context
import { useInputWrapperContext } from './inputWrapperContext';

// styles
import styles from './input-wrapper.module.css';

type Props = {
  text: string;
};

export function Tip(props: Props) {
  const { text } = props;

  const { isError } = useInputWrapperContext();

  return <div className={styles.errorMessage}>{text}</div>;
}

/** tip for InputWrapper */
export default Tip;
