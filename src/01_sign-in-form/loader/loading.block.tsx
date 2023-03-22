import React from 'react';
import classNames from 'classnames';

// icons
import IconLoadingDots from '../../icons/IconLoadingDots';

// styles
import styles from './loading.module.css';

type Props = {
  size?: string;
  className?: string;
  white?: boolean;
  grayDark?: boolean;
};

export default function Loading({ className }: Props) {
  return (
    <span className={classNames(styles.loader, className)}>
      <IconLoadingDots />
    </span>
  );
}
