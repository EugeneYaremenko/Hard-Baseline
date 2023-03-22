import React from 'react';

// components
import AuthForm from './01_sign-in-form/auth-form';
// styles
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <AuthForm />
    </div>
  );
}
