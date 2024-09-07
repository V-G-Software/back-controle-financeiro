import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/server/schema/**/*.graphql",
  generates: {
    "./src/server/schema/generated/": {
      config: {
        useIndexSignature: true,
      },
      plugins: ["typescript", "typescript-resolvers"],
      // @ts-expect-error - This is a custom preset
      preset: "@eddeee888/gcg-typescript-resolver-files",
      presetConfig: {
        resolverTypesPath: "./types.generated.d.ts",
        typesPluginsConfig: {
          contextType: "../../contracts#Context",
          optionalResolveType: false,
          skipTypename: true,
          namingConvention: {
            enumValues: "change-case-all#upperCase",
          },
        },
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};
export default config;
