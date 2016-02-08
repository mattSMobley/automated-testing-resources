
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('groups', function(table){
          table.increments('groupId');
          table.string('groupName');
          table.text('groupDesc');
      })
  ]);
};

exports.down = function(knex, Promise) {
     return Promise.all([
       knex.schema.dropTable('groups') 
    ]); 
};
