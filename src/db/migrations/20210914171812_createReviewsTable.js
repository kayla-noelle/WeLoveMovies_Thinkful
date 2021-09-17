
exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) =>{
    table.increments("review_id").primary();
    table.text("content");
    table.integer("score");
    table.integer("critic_id").unsigned().notNullable();
    table
    .foreign("critic_id")
    .reference("critic_id")
    .inTable("critics")
    .onDelete("cascade")
    table.integer("movie_id").unsigned().notNullable();
    table
    .foreign("movie_id")
    .reference("movie_id")
    .inTable("movies")
    .onDelete("cascade")
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("reviews");
};
