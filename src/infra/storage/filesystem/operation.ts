import path from 'node:path';

import type { LocalFileObject } from '@/server/context/contracts';

import { CACHE_TIME_HELPER } from '@/support/constants';
import { isNil } from '@/support/utils';

import type { SignedUrlResponse, UploadFileParams } from './contracts';

function buildGetSignedUrl(options: UploadFileParams) {
  return async (key: string, expires?: string): Promise<string> => {
    const { httpClient } = options;

    const duration = isNil(expires) ? CACHE_TIME_HELPER.ONE_HOUR : expires;

    const body = {
      file_name: path.join(key),
      duration,
    };

    const { data } = await httpClient.post<SignedUrlResponse>('/sign', body);

    return data.url;
  };
}

function buildListFiles(_: UploadFileParams) {
  return async (_: string, __: number): Promise<LocalFileObject[]> => {
    return await Promise.resolve([
      {
        key: 'example.jpg',
        size: 1000,
        lastModified: new Date(),
      },
    ]);
  };
}

function buildHasFile(_: UploadFileParams) {
  return async (_: string): Promise<boolean> => {
    return await Promise.resolve(true);
  };
}

const getSignedUrl = buildGetSignedUrl;
const listFiles = buildListFiles;
const hasFile = buildHasFile;

export default { getSignedUrl, listFiles, hasFile };
