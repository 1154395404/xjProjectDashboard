const express = require('express');
const fs=require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const app = express();
const options = {
    pfx: fs.readFileSync(path.join(__dirname, 'public','xiaojunplay.cn.pfx')),
    passphrase: 'k0q0u573d1128k7'
};
const projectList = require('./data/projectList')
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

const serverHttps = https.createServer(options,app);
const serverHttp = http.createServer(app);
const cosPrefix='https://web-1301368439.cos-website.ap-beijing.myqcloud.com'
app.get('/', (req, res) => {
    console.log('/');
    // res.redirect('https://www.baidu.com/')
    res.redirect(`${cosPrefix}/dashboard/`)
});
app.use(express.static('public'))
// app.use(express.static('public/dashboard'))
app.use(express.static('public/toutiao'))


app.get('/dashboard', (req, res) => {
    // res.redirect('https://www.baidu.com/')
    res.redirect(`${cosPrefix}/dashboard/`)
});
app.get('/getProjectList', (req, res) => {
    console.log('/getProjectList');
    res.send(projectList)
});
app.get('/baidu', (req, res) => {
    res.redirect('https://www.baidu.com/')
});
app.get('/chat', (req, res) => {
    // 聊天项目
    res.redirect(`${cosPrefix}/chat/website/login.html`)
});
app.get('/qmusic', (req, res) => {
    // q音乐
    res.redirect('http://www.xiaojunplay.cn:3002')
});
app.get('/toutiao_m', (req, res) => {
    // q音乐
    res.redirect('http://www.xiaojunplay.cn/toutiao')
});
app.get('/quanqiu', (req, res) => {
    //全球商城
    res.redirect('http://quanqiu.aishangts.com/web')
});
app.get('/dunion', (req, res) => {
    //滴滴联盟
    res.redirect('http://union.didi.cn/#/')
});
app.get('/j_swiper', (req, res) => {
    //j_swiper组件
    res.redirect('https://github.com/1154395404/j-swiper')
});
app.get('/i_remember', (req, res) => {
    //iRemember
    res.redirect(`${cosPrefix}/remember/`)
});
app.get('/qiuqiu', (req, res) => {
    //
    res.send(`
    <h1>由于实时网络原因，这个项目还暂不能提供访问</h1>
    `)
});
app.get('/hannong', (req, res) => {
    //
    // res.redirect('https://github.com/1154395404/j-swiper')
    res.send(`
    <h1>请在 微信小程序中 搜索 瀚农科技</h1>
    `)
});
app.get('/netMusic', (req, res) => {
    //
    // res.redirect('https://github.com/1154395404/j-swiper')
    res.send(`
    <h1>该项目 由原生微信小程序技术开发 无法在线演示</h1>
    `)
});
app.get('/2048', (req, res) => {
    //2048
    res.redirect(`${cosPrefix}/2048/`)
});
app.get('/bomb', (req, res) => {
    //扫雷
    res.redirect(`${cosPrefix}/bomb/`)
});
app.get('/aircraft', (req, res) => {
    //飞机大战
    res.redirect(`${cosPrefix}/aircraft/`)
});
app.get('/resume', (req, res) => {
    //简历
    res.redirect(`${cosPrefix}/resume/resume.pdf`)
});
app.get('/uml', (req, res) => {
    //简历
    res.redirect(`${cosPrefix}/files/211500000295张军.zip`)
});
// const port=443;
serverHttps.listen(443, () => {
    console.log('https项目管理器已经启动 port:'+443);
})

serverHttp.listen(80, () => {
    console.log('http项目管理器已经启动 port:'+80);
})
// /aircraft 进入飞机大战
// /2048 进入2048
// /bomb 进入扫雷



