const express = require('express')
const Router = express.Router();

Router.use('/getProjectList',require('./projectList'))


module.exports=Router
