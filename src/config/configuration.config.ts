// src/config/configuration.ts
const configuration = () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  env: process.env.NODE_ENV ?? 'development',
  // add other config values here
});

export default configuration;