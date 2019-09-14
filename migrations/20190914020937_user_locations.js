
exports.up = function(knex) {
    return knex.schema.createTable('user_locations', (users) => {
        users.increments();
 
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_locations')
};
