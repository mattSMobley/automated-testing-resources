
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('users', function(table){
          table.increments('userId');
          table.string('userName');
          table.string('fName');
          table.string('lName');
      })
  ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
       knex.schema.dropTable('users') 
    ]);
};
