import React from 'react';

// types
import type { GlobalButtonProps } from './button.types';

// styles
import styles from './button.module.css';
import Loading from '../loader/loading.block';

const Button = React.forwardRef(
  (props: GlobalButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {
    const { type = 'button', disabled, isLoading, children, ...attrs } = props;

    const isDisabled = disabled || isLoading;

    return (
      <button ref={ref} className={styles.button} type={type} disabled={isDisabled} {...attrs}>
        {isLoading ? <Loading /> : children}
      </button>
    );
  },
);

/** Default app button */
export default React.memo(Button);
