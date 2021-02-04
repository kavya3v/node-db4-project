const express=require('express');
const helmet=require('helmet');
const recipeRouter= require('./recipes_router');
const ingredientsRouter= require('./ingredients_router');

const server=express();
server.use(express.json());
server.use(helmet());
server.use('/api/recipe',recipeRouter);
server.use('/api/ingredients',ingredientsRouter);

server.get('/',(req,res)=>{
    res.json({message: "Hello from server"})
})

server.use((error,req,res,next)=>{
    const statusCode=error.statusCode ? error.statusCode : 500
    res.status(statusCode).json(error.message)
})

module.exports=server;

