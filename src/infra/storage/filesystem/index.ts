import axios from 'axios';

import services from './operation';

import type { FileManager, FileSystem } from '@/server/context/contracts';

function buildService(config: FileManager['fileSystem']): FileSystem {
  const httpClient = axios.create({
    baseURL: config.remoteURL,
    timeout: 2000,
  });

  const initialValue = {};

  return Object.entries(services).reduce((acc, [name, method]) => {
    acc[name] = method({ httpClient });

    return acc;
  }, initialValue) as FileSystem;
}

function buildFactory(config: FileManager) {
  return () => {
    return buildService(config.fileSystem);
  };
}

export { buildFactory };
