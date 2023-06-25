import React from 'react';

// components
import AuthForm from './01_sign-in-form/auth-form';
import InputWrapper from './09_input-wrapper/input-wrapper';
// styles
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      {/* <AuthForm /> */}
      <InputWrapper>
        <InputWrapper.Icon position="left" />
        <InputWrapper.Input name={'test input'} id={'test'} onChange={() => null} />
        <InputWrapper.Label text="test label" id={'test'} />
      </InputWrapper>
    </div>
  );
}
