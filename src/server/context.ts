import { createConnection } from "../infra/knexfile";
import { Context } from "./contracts";

export function constructCtx(): Context {
  return {
    database: createConnection(),
  };
}
