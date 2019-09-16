
exports.up = function(knex) {
    return knex.schema.createTable('locations', (locations) => {
        locations.increments();
        // locations.integer('latitude');
        // locations.integer('longitude');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locations')
};
