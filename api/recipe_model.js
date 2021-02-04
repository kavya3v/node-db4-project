const db=require('../config');

module.exports={get,getShoppingList,getInstructions,getIngredientsRecipe}

//get recipes
function get(){
 return db("recipes")
}

// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
async function getShoppingList(recipe_id){
 const sList= await db("ingredients as i")
                .join("recipes_ingredients as ri","ri.ingredient_id","i.id")
                .join("recipes as r","r.id","ri.recipe_id")
                .where("ri.recipe_id",recipe_id)
                .select("r.id","r.recipe_name","i.ingredient_name","ri.quantity")
 return sList;
}

// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

async function getInstructions(recipe_id){
 
   const ins =  await db("recipe_instructions as ri")
                        .join("recipes as r", "r.id","ri.recipe_id")
                        .where("r.id",recipe_id)
                        .select("ri.step_number", "ri.instructions","r.recipe_name")
                        .orderBy("ri.step_number")
  
    return ins;
}

 //Get all recipes in the system that utilize a single ingredient
async function getIngredientsRecipe(ingredient_id){
const recipes= await db("recipes as r")
                .join("recipes_ingredients as ri","ri.recipe_id","r.id") 
                .join("ingredients as i","i.id","ri.ingredient_id")  
                .where("ri.ingredient_id",ingredient_id)
                .select("r.recipe_name","i.ingredient_name")
return recipes;

}