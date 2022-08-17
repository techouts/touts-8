module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '10.0.0.20'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'fbilprodcms'),
        username: env('DATABASE_USERNAME', 'fbilcms'),
        password: env('DATABASE_PASSWORD', 'fbilcms@2020'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
