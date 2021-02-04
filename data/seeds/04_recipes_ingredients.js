
exports.seed = async function(knex) {
   await knex("recipes_ingredients").insert([
     {recipe_id:1,ingredient_id:1,quantity:2.0},
     {recipe_id:1,ingredient_id:2,quantity:1.5},
     {recipe_id:2,ingredient_id:3,quantity:3.0},
     {recipe_id:2,ingredient_id:4,quantity:1.25},
     {recipe_id:3,ingredient_id:5,quantity:1.25},
     {recipe_id:4,ingredient_id:7,quantity:2.5},
     {recipe_id:4,ingredient_id:6,quantity:0.5},
     {recipe_id:4,ingredient_id:2,quantity:1.0}
   ])
};
