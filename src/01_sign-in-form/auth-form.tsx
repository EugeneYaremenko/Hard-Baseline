import React, { useState } from 'react';

// components
import Loading from './loader/loading.block';
import Button from './button/button';

// consts
import { EMAIL_VALIDATION_RULE } from '../const/auth-const';

// types
import { AuthFormType } from './types/auth-form-types';

// styles
import styles from './auth-form.module.css';

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

  return (
    <div className={styles.authFormWrapper}>
      {isLoading ? (
        <div className={styles.authFormLoader}>
          <Loading />
        </div>
      ) : (
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div className={styles.formFields}>
            <input
              type="email"
              name="email"
              pattern={EMAIL_VALIDATION_RULE}
              required
              onChange={handleChange}
              value={inputValue.email}
              title={"doesn't look like an email"}
              className={styles.formInput}
              placeholder={'enter your email'}
            />

            <input
              type="password"
              name="password"
              minLength={4}
              maxLength={20}
              required
              onChange={handleChange}
              value={inputValue.password}
              className={styles.formInput}
              placeholder={'enter your password'}
            />
          </div>
          <Button className={styles.submitButton} type="submit">
            Sign In
          </Button>
        </form>
      )}
    </div>
  );
}
