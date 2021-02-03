
exports.seed = async function(knex) {
  await knex("recipe_instructions").insert([
    {recipe_id:1,step_number:1,instructions:"Mix ingredients well for 10min"},
    {recipe_id:1,step_number:2,instructions:"Bake for 40min at 350 degree"},
    {recipe_id:1,step_number:3,instructions:"Serve with nuts and fruits"},
    {recipe_id:2,step_number:1,instructions:"Whisk Egg until soft"},
    {recipe_id:2,step_number:2,instructions:"Blend with Almond flour"},
    {recipe_id:2,step_number:3,instructions:"Add raisin and honey"},
    {recipe_id:2,step_number:4,instructions:"Bake for 40min at 350 degree"},
  ])
};
