var knex = require('./db/knex');

module.exports = {
    add: function(userName, fName, lName){
        return knex('users').insert({'userName': userName, 'fName': fName, 'lName': lName})
    }
    
}