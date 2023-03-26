import React from 'react';

// types
import type { GlobalButtonProps } from './button.types';

// styles
import styles from './button.module.css';

const Button = React.forwardRef(
  (props: GlobalButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {
    const { type = 'button', disabled, ...attrs } = props;
    return (
      <button ref={ref} className={styles.button} type={type} disabled={disabled} {...attrs} />
    );
  },
);

/** Default app button */
export default React.memo(Button);
