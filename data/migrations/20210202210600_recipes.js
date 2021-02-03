
exports.up = async function(knex) {
  //recipes
  await knex.schema.createTable("recipes",(table)=>{
      table.increments("id")
      table.text("recipe_name").notNull().unique()
  })
  //ingredients 
  await knex.schema.createTable("ingredients",(table)=>{
      table.increments("id")
      table.text("ingredient_name").notNull().unique()
  })
  //recipe_instructions
  await knex.schema.createTable("recipe_instructions",(table)=>{
    table.increments()
    //creates a foreign key
    table.integer("recipe_id").notNull()
    .references("id").inTable("recipes")
    .onDelete("SET NULL")
    table.integer("step_number").unsigned().notNullable();
    table.text("instructions")
  })
  //recipes_ingredients
  await knex.schema.createTable("recipes_ingredients",(table)=>{
      table.integer("recipe_id").notNull()
      .references("id").inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      table.integer("ingredient_id").notNull()
      .references("id").inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      table.float("quantity").notNull()
      table.primary(['recipe_id','ingredient_id'])
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients")
  await knex.schema.dropTableIfExists("recipe_instructions")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
}
