
exports.up = function(knex) {
    return knex.schema.createTable('locations', (locations) => {
        locations.increments();
      
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locations')
};
