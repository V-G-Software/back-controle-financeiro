import { type Context } from '@/server/context';

// todo implementar método hasFile que verifica se o arquivo existe no serviço de arquivos
/**
 * Constrói um resolver que verifica a existência de um arquivo
 * no serviço de arquivos e o busca caso exista
 * @param {(root: Object) => string} buildUrl Função que constrói a url do arquivo a partir do objeto base
 */
export function buildFileFieldResolver<TParent>(
  buildUrl: (root: TParent) => string
) {
  return async function (root: TParent, _: unknown, context: Context) {
    const { services } = context;

    const { filesystem } = services;

    const url = buildUrl(root);

    const hasFile = await filesystem.hasFile(url);

    if (!hasFile) {
      return null;
    }

    return await filesystem.getSignedUrl(url);
  };
}
