import { useContext, createContext } from 'react';

const InputWrapperContext = createContext<{
  isError: boolean;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
} | null>(null);

export function useInputWrapperContext() {
  const context = useContext(InputWrapperContext);

  if (!context) {
    throw new Error('InputWrapper.* must be rendered as child of InputWrapper component');
  }

  return context;
}

export default InputWrapperContext;
