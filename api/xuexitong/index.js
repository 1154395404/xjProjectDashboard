const express = require('express')
const Router = express.Router();
// const projectList=require('./projectList')

// Router.get('/',(req,res)=>{
//     res.send(projectList)
// })
let answer=null;
Router.get('/getAnswer',(req,res)=>{
    res.send({
        code:200,
        msg:'请求成功',
        data:answer
    })
})
Router.post('/setAnswer',(req,res)=>{

    // console.log('@',req.body)
    answer=req.body
    res.send({
        code:200,
        msg:'请求成功',
        data:'ok'
    })
})
module.exports=Router
