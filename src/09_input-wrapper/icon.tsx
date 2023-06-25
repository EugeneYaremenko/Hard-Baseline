import React from 'react';
import classnames from 'classnames';

// icons
import InputDefaultIcon from './icons/IconLoadingDots';

// styles
import styles from './input-wrapper.module.css';

type Props = {
  icon?: React.ReactNode;
  position?: 'left' | 'right';
};

function Icon(props: Props) {
  const { icon, position = 'right' } = props;

  return (
    <div
      className={classnames(styles.icon, {
        [styles.iconPositionRight]: position === 'right',
        [styles.iconPositionLeft]: position === 'left',
      })}
    >
      {icon ? icon : <InputDefaultIcon />}
    </div>
  );
}

/** icon for InputWrapper */
export default Icon;
