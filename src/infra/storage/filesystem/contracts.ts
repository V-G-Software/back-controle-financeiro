import { type AxiosInstance } from 'axios';

interface UploadFileParams {
  httpClient: AxiosInstance;
}

interface SignedUrlResponse {
  url: string;
}

export type { UploadFileParams, SignedUrlResponse };
