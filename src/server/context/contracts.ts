interface FileManager {
  fileSystem: {
    remoteURL: string;
  };
}

interface LocalFileObject {
  key?: string;
  size?: number;
  lastModified?: Date;
}

type GetSignedUrlFunction = (key: string, expires?: string) => Promise<string>;

type ListFilesFunction = (
  prefix: string,
  limit: number
) => Promise<LocalFileObject[]>;

type HasFileFunction = (key: string) => Promise<boolean>;

interface FileSystem {
  getSignedUrl: GetSignedUrlFunction;
  listFiles: ListFilesFunction;
  hasFile: HasFileFunction;
}

interface ServicesManager {
  filesystem: FileSystem;
}

type ContextServices = Record<string, null> & ServicesManager;

export type {
  ContextServices,
  ServicesManager,
  GetSignedUrlFunction,
  ListFilesFunction,
  FileManager,
  HasFileFunction,
  LocalFileObject,
  FileSystem,
};
