import React from 'react';

// styles
import styles from './input-wrapper.module.css';

type Props = {
  text: string;
};

function Tip(props: Props) {
  const { text } = props;

  return <div className={styles.errorMessage}>{text}</div>;
}

export default Tip;
