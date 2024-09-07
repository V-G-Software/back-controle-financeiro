import { z } from 'zod';
import { config } from "dotenv";
config();

const envSchema = z.object({
  PORT: z.string().default('3000'),
  DB_USERNAME: z.string().default('postgres'),
  DB_PASSWORD: z.string().default('postgres'),
  DB_PORT: z.string().default('5432'),
  DB_HOST: z.string().default('localhost'),
  DB_NAME: z.string().default('postgres'),
  DB_DRIVER: z.string().default("pg"),
  DEFAULT_ADMIN_EMAIL: z.string().default("admin@example.com"),
  DEFAULT_ADMIN_PASSWORD: z.string().default("password"),
  JWT_SECRET: z.string().default("secret"),
  SALT_OR_ROUNDS: z.string().default('10'),
});

export const env = envSchema.parse(process.env);

export const dbConfig = Object.freeze({
  DB_USERNAME: env.DB_USERNAME,
  DB_PASSWORD: env.DB_PASSWORD,
  DB_PORT: Number(env.DB_PORT),
  DB_HOST: env.DB_HOST,
  DB_NAME: env.DB_NAME,
  DB_DRIVER: env.DB_DRIVER,
});
