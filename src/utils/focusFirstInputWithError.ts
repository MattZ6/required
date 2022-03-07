import { SubmitErrorHandler } from 'react-hook-form';

export const focusFirstInputWithError: SubmitErrorHandler<any> = errors => {
  const [first] = Object.keys(errors);

  setTimeout(() => {
    const input: HTMLInputElement | undefined = errors[first].ref;

    input?.focus();
  }, 0);
};
