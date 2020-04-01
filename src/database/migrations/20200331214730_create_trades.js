exports.up = function(knex) {
    return knex.schema.createTable('trades', function (table) {
        table.string('id').primary();
        table.int('type').notNullable();
        table.int('contracts').notNullable();
        table.string('hour').notNullable();
        table.string('trigger').notNullable();
        table.int('triggerType').notNullable();
        table.string('localGraph').notNullable();
        table.string('detail').notNullable();
        table.decimal('value').notNullable();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('trades');
};