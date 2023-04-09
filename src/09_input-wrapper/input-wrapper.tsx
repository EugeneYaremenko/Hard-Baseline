import React, { memo } from 'react';
import classnames from 'classnames';

// types
import { ValidationType } from './input-wrapper.types';

// styles
import styles from './input-wrapper.module.css';

export type Props = {
  wrapperClassName?: string;
  children: React.ReactNode;
  readOnly?: boolean;
  loading?: boolean;
};

export default function InputWrapper(props: Props) {
  const { wrapperClassName, children, readOnly, loading } = props;

  return (
    <div
      className={classnames(styles.wrapper, wrapperClassName, {
        [styles.wrapperReadOnly]: readOnly,
      })}
    >
      {loading || children}
    </div>
  );
}
