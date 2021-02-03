
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {recipe_name:"Protein shake"},
    {recipe_name:"Egg Muffin"},
    {recipe_name:"Butter Chicken"},
    {recipe_name:"Chocolate Milk"}
  ])
};
