// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'localhost/database-test',
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
