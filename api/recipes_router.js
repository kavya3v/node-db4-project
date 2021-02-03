const router=require('express').Router();
const dbModel=require('./recipe_model');

router.get('/',async (req,res,next)=>{
      try {
          const recipes= await dbModel.get();
          res.status(200).json(recipes)
      } catch (err) {
          next(err)
      }
})

router.get('/:id/shoppingList',async(req,res,next)=>{
    try {
        const list = await dbModel.getShoppingList(req.params.id)
        if(list.length === 0 ){
            // res.status(404).json({message : "invalid recipe ID"})
            const err=new Error("Invalid recipe ID")
            err.statusCode=404
            next(err)
        }else{
            res.status(200).json(list)
        }
    } catch (err) {
        next(err)
    }
})

router.get('/:id/instructions',async (req,res,next)=>{
    try {
        const ins= await dbModel.getInstructions(req.params.id)
        if(!ins){
            res.status(404).json({message : "recipe id not found"})
        }else {
            res.status(200).json(ins)
        }
    } catch (err) {
        next(err)
    }
})


module.exports=router;