const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');  // Use 'postgres' for Render PostgreSQL

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),  // Use DATABASE_URL from .env
        host: env('DATABASE_HOST', 'dpg-cvla22s9c44c73fcd3a0-a.oregon-postgres.render.com'), // Updated hostname
        port: env.int('DATABASE_PORT', 5432), // Render database port
        database: env('DATABASE_NAME', 'ai_resume_db_temp'), // Updated database name
        user: env('DATABASE_USERNAME', 'ai_resume_db_temp_user'), // Updated database user
        password: env('DATABASE_PASSWORD', 'dKnnPhagaBtnypaiTIVACXS6DxLP0rUx'), // Updated database password
        ssl: {
          rejectUnauthorized: true,  // Enable SSL for Render PostgreSQL connection
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
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
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
