
exports.seed = async function(knex) {
  await knex('recipes_ingredients').truncate()
  await knex('recipe_instructions').truncate()
  await knex('ingredients').truncate()
  await knex('recipes').truncate()
};
