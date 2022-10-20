const express = require('express')
const Router = express.Router();
const projectList=require('./projectList')

Router.get('/',(req,res)=>{
    res.send(projectList)
})

module.exports=Router
