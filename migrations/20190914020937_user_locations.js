
exports.up = function(knex) {
    return knex.schema.createTable('user_locations', (users) => {
        user_locations.increments();
        // user_locations.integer("user_id");
        // user_locations.integer('location_id');
        // user_locations.text('comment');
        
 
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_locations')
};
