import { ValidationError } from 'yup';

interface FormErrors {
  [key: string]: string;
}

export function getValidationErrors(
  error: ValidationError,
): FormErrors {
  const formErrors: FormErrors = {};

  error.inner.forEach((err) => {
    formErrors[String(err.path)] = err.message;
  });

  return formErrors;
}
