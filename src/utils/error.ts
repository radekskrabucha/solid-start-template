import { AxiosError } from 'axios'
import { z } from 'zod'

type HttpStatusCodesMappedErrors = Record<number, string>

type GetErrorMessageArgs<T extends Error> = {
  error: T
  httpStatusCodesMappedErrors?: HttpStatusCodesMappedErrors
  errorHandler?: (error: T) => string
}

export const getErrorMessage = <T extends Error>({
  error,
  errorHandler,
  httpStatusCodesMappedErrors
}: GetErrorMessageArgs<T>): string => {
  if (errorHandler) {
    return errorHandler(error)
  }
  if (error instanceof z.ZodError) {
    return error.errors.map(error => error.message).join('\n')
  }
  if (error instanceof AxiosError) {
    if (
      httpStatusCodesMappedErrors &&
      error.response?.status &&
      httpStatusCodesMappedErrors[error.response.status]
    ) {
      const mappedError = httpStatusCodesMappedErrors[error.response.status]

      if (mappedError) {
        return mappedError
      }
    }
    if (error.response?.status === 401) {
      return 'Authentication Required. Please login.'
    }
    if (error.response?.status === 500) {
      return 'Internal Server Error. Please refresh the page or try again later.'
    }
  }
  if (error instanceof Error) {
    return error.message
  }

  return 'Oops! Something went wrong.'
}
