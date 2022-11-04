import { AxiosError } from 'axios';

type ApplicationErrorCode =
  | 'validation'
  | 'user.not.exists'
  | 'user.exists'
  | 'password.wrong'
  | 'token.expired';

type ValidationErrorData<F = any> = {
  type: string;
  field: keyof F;
  value: string;
  message: string;
};

type ApplicationError<F> = {
  code?: ApplicationErrorCode;
  message: string;
  validation?: ValidationErrorData<F>;
};

export type ParsedError<F = any> = {
  status?: number;
  error: ApplicationError<F>;
};

export function parseRequestError<F = any>(
  error: Error | AxiosError | any
): ParsedError<F> {
  if (error.isAxiosError) {
    const axiosError = error as AxiosError<ApplicationError<F>>;

    return {
      status: axiosError.response?.status ?? undefined,
      error: {
        code: axiosError.response?.data?.code,
        message: axiosError.response?.data?.message ?? 'Unexpected error',
        validation: axiosError.response?.data?.validation,
      },
    };
  }

  return {
    status: undefined,
    error,
  };
}
