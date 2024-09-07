import { env } from "./infra/config";
import { buildServer } from "./server";

buildServer(env.PORT);
