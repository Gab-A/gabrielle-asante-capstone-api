exports.up = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.string("password", 255).notNullable().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.string("password", 8).notNullable().alter();
  });
};
