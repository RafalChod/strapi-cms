import { parse } from 'pg-connection-string';

export default ({ env }) => {
  const databaseUrl = env('DATABASE_URL');
  const config = parse(databaseUrl);
  const client = env('NODE_ENV', 'development') === 'production' ? 'postgres' : 'sqlite';

  return {
    connection: {
      client,
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        },
      },
      debug: false,
    },
  };
};
