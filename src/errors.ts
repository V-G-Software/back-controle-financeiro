import type { FastifyError } from 'fastify';
import { GraphQLError } from 'graphql';

const isFastifyError = (error: unknown): error is FastifyError => {
  return error instanceof Error && 'statusCode' in error;
};

type OriginalError = Record<string, unknown>;

class AppError extends GraphQLError {
  constructor(message: string, code?: string, originalError?: OriginalError) {
    super(message, { extensions: { code, originalError } });

    Object.defineProperty(this, 'name', { value: 'AppError' });
  }

  static build(
    message: string,
    code?: string,
    originalError?: OriginalError
  ): AppError {
    return new AppError(message, code, originalError);
  }
}

class ValidationError extends GraphQLError {
  constructor(
    message: string,
    validationContext: Record<string, unknown> = {}
  ) {
    super(message, {
      extensions: {
        code: 'BUSINESS_VALIDATION_FAILED',
        ...validationContext,
      },
    });

    Object.defineProperty(this, 'name', { value: 'ValidationError' });
  }

  static build(
    message: string,
    validationContext: Record<string, unknown> = {}
  ): ValidationError {
    return new ValidationError(message, validationContext);
  }
}

export { isFastifyError, AppError, ValidationError };
