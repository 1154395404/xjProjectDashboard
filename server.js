const express = require('express');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const app = express();
const options = {
    pfx: fs.readFileSync(path.join(__dirname, 'public', 'xiaojunplay.cn.pfx')),
    passphrase: 'k0q0u573d1128k7'
};
// const projectList = require('./data/projectList')
const projecctsApi = require('./projectsApi')
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

const serverHttps = https.createServer(options, app);
const serverHttp = http.createServer(app);
app.use(express.static('public'))
app.use(express.static('public/toutiao'))

app.use(projecctsApi);
app.use('/api',require('./api'));

// const port=443;
const httpsPort=443;
serverHttps.listen(httpsPort, () => {
    console.log('https项目管理器已经启动 port:' + httpsPort);
})

// push 之前 改为80
const httpPort=801;
serverHttp.listen(httpPort, () => {
    console.log('http项目管理器已经启动 port:' + httpPort);
})
// /aircraft 进入飞机大战
// /2048 进入2048
// /bomb 进入扫雷



