exports.up = async function(knex) {
    await knex.schema.createTable("Projects", (table) => {
        table.increments("id")
        table.text("projectName").notNullable().unique()
        table.text("projectDescription").notNullable()
        table.boolean("projectCompletion").notNullable().defaultTo(false)
    })

    await knex.schema.createTable("Resources", (table) => {
        table.increments("id")
        table.text("resourceName").notNullable().unique()
        table.text("resourceDescription")
    })

    await knex.schema.createTable("Tasks", (table) => {
        table.increments("id")
        table.text("taskDecription").notNullable()
        table.text("taskNotes")
        table.boolean("taskCompletion").notNullable().defaultTo(false)
        table.integer("project_id").notNull().defaultTo(false)
          .references("id")
          .inTable("projects")
          .onDelete("cascade")
          .onUpdate("cascade")
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("Projects")
    await knex.schema.dropTableIfExists("Resources")
    await knex.schema.dropTableIfExists("Tasks")
  
};
