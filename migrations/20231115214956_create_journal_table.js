exports.up = function (knex) {
  return knex.schema.createTable("journal", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("content").notNullable();
    table.string("mood").notNullable();
    table
      .integer("users_id")
      .unsigned()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("journal");
};
