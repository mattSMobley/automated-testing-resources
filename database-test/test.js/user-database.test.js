var chai = require('chai');
var user = require('../user-database.js');
var knex = require('../db/knex')

var expect = chai.expect;

describe('Test user database functionality', function(){
    
   it('should insert a user into database', function(done){
       
       knex.migrate.rollback();
       
       knex.migrate.latest().then(function(){
            user.add('roger.schmidt','roger','schmdit').then(
                function(data){
                    expect(data.rowCount).to.equal(1);
                    done();
                },
                function(err){
                    expect.fail('failed insert');
                    done();
                }
            )
       });
   });
    
   it('should get a list of all users');
   
   it('should get a specific user with a give userId');
   
   it('should delete a specific user with a given userId')
   
   it('should update a specific user with a given userId and updated information')
    
});

