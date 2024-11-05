import { LocalDateResolver } from 'graphql-scalars';
import { convertToIsoDate } from '../dates/convertToIsoDate';

const oldLocalDateResolverSerialize = LocalDateResolver.serialize;

LocalDateResolver.serialize = function (value: string | Date) {
  return oldLocalDateResolverSerialize.apply(this, [convertToIsoDate(value)]);
};

export { LocalDateResolver };
