import { typeDefs } from "./typeDefs.generated";
import { resolvers } from "./resolvers.generated";
import { createSchema } from "graphql-yoga";
import { constructCtx } from "../../context";

export default {
  schema: createSchema({ resolvers, typeDefs }),
  context: constructCtx(),
};
