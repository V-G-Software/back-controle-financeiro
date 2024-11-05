import type { QueryResolvers } from './../../../types.generated';

export const ping: NonNullable<QueryResolvers['ping']> = async () => {
  return 'pong';
};
