/**
 * @flow
 */
import type { Server } from '../../internals/types';

const pgp = require('pg-promise')();

// if (global.Promise) {
//   mongoose.Promise = global.Promise;
// }

export function register(server: Server, options: Object) {
  const cn: Object = {
    host: 'localhost',
    port: 5432,
    database: 'example',
    user: 'postgres',
    password: 'admin',
    ...options,
  };

  const db = pgp(cn);
  // TODO how do you make db available anyway?
  server.expose('db3', db);

  // const queries: Object = require('./queries');  eslint-disable-line global-require

  // Object.keys(queries).forEach((query) => {
  //   server.expose(query, queries[query]);
  // });
}

register.attributes = {
  name: 'db',
};
