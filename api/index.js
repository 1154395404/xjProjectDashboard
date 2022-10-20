const express = require('express')
const Router = express.Router();

//use 当作中间件
Router.use('/getProjectList',require('./projectList'))
//get 直接托管路由
Router.get('/train/:from/:to/:date',require('./12306Query').get)


module.exports=Router
