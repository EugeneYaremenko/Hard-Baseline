import React from 'react';
import classNames from 'classnames';

// icons
import IconLoadingDots from '../../icons/IconLoadingDots';

// styles
import styles from './loading.module.css';

/**
 * Loading - basic component that shows only load indicator
 */
export default function Loading() {
  return (
    <span className={classNames(styles.loader)}>
      <IconLoadingDots />
    </span>
  );
}
