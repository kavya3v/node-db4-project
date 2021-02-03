
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {ingredient_name: "Protein Powder"},
    {ingredient_name: "Cold Water"},
    {ingredient_name: "Eggs"},
    {ingredient_name: "Almond Flour"},
    {ingredient_name: "Chicken cubes"},
    {ingredient_name: "Chocolate powder"},
    {ingredient_name: "Milk"},
  ])
};
