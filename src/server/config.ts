import { getVariable } from './../support/variables/variables';

const DATABASE = Object.freeze({
  DB_HOST: getVariable('DB_HOST', 'localhost'),
  DB_PORT: Number(getVariable('DB_PORT', 5432)),
  DB_USERNAME: getVariable('DB_USERNAME', 'root'),
  DB_PASSWORD: getVariable('DB_PASSWORD', 'root'),
  DB_NAME: getVariable('DB_NAME', 'root'),
});

const ENV = Object.freeze({
  DEFAULT_ADMIN_EMAIL: getVariable('DEFAULT_ADMIN_EMAIL', "admin@example.com"),
  DEFAULT_ADMIN_PASSWORD: getVariable('DEFAULT_ADMIN_PASSWORD', "password"),
  JWT_SECRET: getVariable('JWT_SECRET', "secret"),
  SALT_OR_ROUNDS: getVariable('SALT_OR_ROUNDS','10'),
})

const PORT = Number(getVariable('PORT', 8080));
const URL = getVariable('FRONT_URL', 'http://localhost:5173');

export { DATABASE, PORT, URL, ENV };
