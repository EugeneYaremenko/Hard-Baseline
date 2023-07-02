import React, { useCallback, useMemo, useState } from 'react';

// components
import InputWrapper from './09_input-wrapper/input-wrapper';
import Button from './01_sign-in-form/button/button';

// consts
import { REGEX_EMAIL } from './regex/regex';

// icons
import SvgIconCheck from './icons/IconCheck';

// styles
import styles from './App.module.css';

export default function App() {
  const createFormState = useMemo(
    () => ({
      isError: false,
      isLoading: false,
      email: '',
      password: '',
    }),
    [],
  );

  const [formState, setFormState] = useState<{
    isError: boolean;
    isLoading: boolean;
    email: string;
    password: string;
  }>(createFormState);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormState(prevSTate => {
      return {
        ...prevSTate,
        [name]: value,
      };
    });
  }, []);

  const handleSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      prompt(`email: ${formState.email}, password: ${formState.password} send!!!`);
    },
    [formState],
  );

  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <InputWrapper
        onChange={handleChange}
        isError={formState.isError}
        isLoading={formState.isLoading}
        wrapperClassName={styles.email}
      >
        <InputWrapper.Icon position="left" />
        <InputWrapper.Input name="email" id="email" pattern={REGEX_EMAIL} value={formState.email} />
        <InputWrapper.Label text="email" id="email" />
      </InputWrapper>

      <InputWrapper
        onChange={handleChange}
        isError={formState.isError}
        isLoading={formState.isLoading}
        wrapperClassName={styles.password}
      >
        <InputWrapper.Icon position="right" icon={<SvgIconCheck />} />
        <InputWrapper.Input name="password" id="password" value={formState.password} />
        <InputWrapper.Label text="password" id="password" />
      </InputWrapper>

      <Button type="submit">Login</Button>
    </form>
  );
}
