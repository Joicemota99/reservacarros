const knex = require('knex');


const pool = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 123456,
    port: 5432,
    database: 'reservacarros'
  }
});

module.exports = pool;