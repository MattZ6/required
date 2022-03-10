import { AxiosError } from 'axios';

type ParsedError = {
  status?: number;
  error: {
    code?: string;
    message: string;
  };
};

export function parseRequestError(error: Error | any): ParsedError {
  if (error.isAxiosError) {
    const axiosError = error as AxiosError;

    return {
      status: axiosError.response?.status ?? undefined,
      error: axiosError.response?.data ?? undefined,
    };
  }

  return {
    status: undefined,
    error,
  };
}
