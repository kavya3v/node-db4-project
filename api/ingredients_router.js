const router = require('express').Router();

const dbModel= require('./recipe_model');

// GET /api/ingredients/:id/recipes: all recipes in the system that utilize a single ingredient
router.get('/:id/recipes',async (req,res,next)=>{
try {
    const recipes= await dbModel.getIngredientsRecipe(req.params.id);
    if(recipes.length === 0 ){
        res.status(404).json({message : "ingredient id not found"})
    }else{
        res.status(200).json(recipes)
    }
} catch (err) {
    next(err)
}
})

module.exports=router;