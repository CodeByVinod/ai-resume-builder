const path = require('path');

module.exports = ({ env }) => {
  // Use either connectionString OR individual parameters - not both
  const useConnectionString = env.bool('USE_DATABASE_URL', false);
  
  const connections = {
    postgres: {
      connection: useConnectionString ? {
        connectionString: env('DATABASE_URL'),
        ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false) }
      } : {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: env.bool('DATABASE_SSL', true) ? {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false)
        } : false,
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
        idleTimeoutMillis: 30000,
        createTimeoutMillis: 30000,
        acquireTimeoutMillis: 30000
      }
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client: 'postgres', // Force PostgreSQL for production
      ...connections.postgres, // Directly use postgres config
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};