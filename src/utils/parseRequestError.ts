import { AxiosError } from 'axios';

type ApplicationErrorCode = 'validation' | 'user.not.exists' | 'password.wrong';

type ValidationErrorData = {
  type: string;
  field: string;
  message: string;
};

type ApplicationError = {
  code?: ApplicationErrorCode;
  message: string;
  validation?: ValidationErrorData;
};

export type ParsedError = {
  status?: number;
  error: ApplicationError;
};

export function parseRequestError(
  error: Error | AxiosError | any
): ParsedError {
  if (error.isAxiosError) {
    const axiosError = error as AxiosError<ApplicationError>;

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
