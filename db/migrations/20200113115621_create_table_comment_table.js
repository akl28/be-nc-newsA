exports.up = function(knex) {
  return knex.schema.createTable("comments", commentsTable => {
    commentsTable.increments("comment_id").primary();
    commentsTable
      .string("author")
      .notNullable()
      .references("username")
      .inTable("users");
    commentsTable
      .integer("article_id")
      .notNullable()
      .references("article_id")
      .inTable("articles");
    commentsTable
      .integer("votes")
      .defaultTo(0)
      .notNullable();
    commentsTable.timestamp("created_at").defaultTo(knex.fn.now());
    commentsTable.string("body", 2000).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("comments");
};
