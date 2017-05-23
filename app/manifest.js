import createServer from '../internals/createServer';

import type { Manifest } from '../internals/types';

const manifest: Manifest = {
  server: {
    connections: {
      router: {
        stripTrailingSlash: true,
      },
    },
  },
  connections: [{
    address: '127.0.0.1',
    labels: ['client'],
    port: +process.env.PORT || 1337,
    routes: {
      cors: true,
      validate: {
        options: {
          stripUnknown: true,
        },
      },
      payload: {
        allow: ['application/json'],
      },
    },
  }],
  registrations: [
    {
      plugin: {
        register: './app/api',
        options: {
          superAdminUsername: process.env.super_admin_username || 'admin',
          superAdminPassword: process.env.super_admin_password || 'admin',
        },
      },
      options: {
        routes: {
          prefix: '/v1/api',
        },
      },
    },
    {
      plugin: {
        register: './app/db',
        options: {
        },
      },
    },
    {
      plugin: 'hapi-auth-basic',
    },
  ],
};

export default createServer(manifest);
