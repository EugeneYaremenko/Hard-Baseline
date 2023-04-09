import React from 'react';

// styles
import styles from './input-wrapper.module.css';

type Props = {
  text: string;
  id: string | number;
};

function Label(props: Props) {
  const { id, text } = props;

  return (
    <label className={styles.label} htmlFor={id.toString()}>
      {text}
    </label>
  );
}

export default Label;
