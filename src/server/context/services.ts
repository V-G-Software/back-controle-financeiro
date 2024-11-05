import { fileSystem } from './../../infra/storage';

import type {
  ContextServices,
  FileManager,
  ServicesManager,
} from './contracts';

function buildFactories(config: FileManager): {
  filesystem: ReturnType<typeof fileSystem>;
} {
  return {
    filesystem: fileSystem(config),
  };
}

type BuildServices = ReturnType<typeof fileSystem> | undefined;

function buildServices(
  factories: ReturnType<typeof buildFactories>
): ContextServices {
  const localCache = new Map();

  const fromBuilders = (name: string): ServicesManager['filesystem'] | null => {
    const builder = factories[name] as BuildServices;

    if (builder === undefined) {
      return null;
    }

    return builder();
  };

  return new Proxy(
    {},
    {
      get(_, prop: string) {
        if (!localCache.has(prop)) {
          localCache.set(prop, fromBuilders(prop));
        }

        return localCache.get(prop);
      },
    }
  ) as ContextServices;
}

function serviceManager(config: FileManager): ContextServices {
  const factories = buildFactories(config);

  return buildServices(factories);
}

export { serviceManager };
