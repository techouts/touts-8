module.exports = {
  apps: [
    {
      name: 'strapi',
       cwd: '/home/ubuntu/fbilstrapi3.0.2',
      script: '/home/ubuntu/fbilstrapi3.0.2/config/server.js',
      args: 'start',
      autorestart: true,
      autoReload: true,
      watch: true,
          max_memory_restart: '2G',
     env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
    },
  ],
};

