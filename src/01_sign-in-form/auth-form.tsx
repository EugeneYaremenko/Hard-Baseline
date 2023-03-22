import React from 'react';

// components
import Button from './button/button';
// styles
import styles from './auth-form.module.css';

export default function AuthForm() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert('test sign-in is completed!');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}></div>
      <Button type="submit">Sign In</Button>
    </form>
  );
}
