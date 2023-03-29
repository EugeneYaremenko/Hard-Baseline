import { ReactNode } from 'react';

export type ValidationType =
  | {
      error?: true;
      errorMessage?: ReactNode;
      success?: never | false;
    }
  | {
      error?: never | false;
      errorMessage?: never;
      success?: true;
    };
