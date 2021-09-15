
exports.up = function(knex) {
    return knex.schema.createTable("movie_theaters", (table) => {
        table
           .foreign("movie_id")
           .references("movie_id")
           .inTable("movies")
           .onDelete("cascade")

        table
           .foreign ("theater_id")
           .references("theater_id")
           .inTable("theaters")
           .onDelete("cascade")
        table.boolean("is_showing")      
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("movies_theaters");
};
