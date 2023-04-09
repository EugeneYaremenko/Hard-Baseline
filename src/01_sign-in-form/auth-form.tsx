import React, { useState } from 'react';

// components
import Loading from './loader/loading.block';
import Button from './button/button';

// types
import { AuthFormType } from './types/auth-form-types';

// styles
import styles from './auth-form.module.css';
import Input from '../03_input/input';

/**
 * AuthForm - login to app form, consists of a login and password
 */
export default function AuthForm(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<AuthFormType>({
    email: '',
    password: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      alert('test sign-in is completed!'); // some request
    } catch (e) {
      console.error(`handleSubmit err: ${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (isLoading)
    return (
      <div className={styles.authFormLoader}>
        <Loading />
      </div>
    );

  return (
    <div className={styles.authFormWrapper}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div className={styles.formFields}>
          <Input
            type="email"
            name="email"
            variant="outline"
            required
            onChange={handleChange}
            value={inputValue.email}
            title={"doesn't look like an email"}
            placeholder={'enter your email'}
          />

          <Input
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={inputValue.password}
            placeholder={'enter your password'}
          />
        </div>
        <Button className={styles.submitButton} type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
}
