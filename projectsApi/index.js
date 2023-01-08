const express = require('express')
const Router = express.Router();


const cosPrefix = 'https://web-1301368439.cos-website.ap-beijing.myqcloud.com'
Router.get('/', (req, res) => {
    console.log('/');
    // res.redirect('https://www.baidu.com/')
    // res.redirect(`${cosPrefix}/dashboard/`)
    res.send(`<h1><a href="/dashboard">《一封情书》</a></h1>`)
});



Router.get('/dashboard', (req, res) => {
    // res.redirect('https://www.baidu.com/')
    res.redirect(`${cosPrefix}/dashboard/`)
});
// Router.get('/getProjectList', (req, res) => {
//     console.log('/getProjectList');
//     res.send(projectList)
// });
Router.get('/baidu', (req, res) => {
    res.redirect('https://www.baidu.com/')
});
Router.get('/chat', (req, res) => {
    // 聊天项目
    res.redirect(`${cosPrefix}/chat/website/login.html`)
});
Router.get('/qmusic', (req, res) => {
    // q音乐
    res.redirect('http://www.xiaojunplay.cn:3002')
});
Router.get('/toutiao_m', (req, res) => {
    // q音乐
    res.redirect('http://www.xiaojunplay.cn/toutiao')
});
Router.get('/quanqiu', (req, res) => {
    //全球商城
    res.redirect('http://quanqiu.aishangts.com/web')
});
Router.get('/dunion', (req, res) => {
    //滴滴联盟
    res.redirect('http://union.didi.cn/#/')
});
Router.get('/j_swiper', (req, res) => {
    //j_swiper组件
    res.redirect('https://github.com/1154395404/j-swiper')
});
Router.get('/i_remember', (req, res) => {
    //iRemember
    res.redirect(`${cosPrefix}/remember/`)
});
Router.get('/qiuqiu', (req, res) => {
    //
    res.send(`
    <h1>由于实时网络原因，这个项目还暂不能提供访问</h1>
    `)
});
Router.get('/hannong', (req, res) => {
    //
    // res.redirect('https://github.com/1154395404/j-swiper')
    res.send(`
    <h1>请在 微信小程序中 搜索 瀚农科技</h1>
    `)
});
Router.get('/netMusic', (req, res) => {
    //
    // res.redirect('https://github.com/1154395404/j-swiper')
    res.send(`
    <h1>该项目 由原生微信小程序技术开发 无法在线演示</h1>
    `)
});
Router.get('/2048', (req, res) => {
    //2048
    res.redirect(`${cosPrefix}/2048/`)
});
Router.get('/bomb', (req, res) => {
    //扫雷
    res.redirect(`${cosPrefix}/bomb/`)
});
Router.get('/aircraft', (req, res) => {
    //飞机大战
    res.redirect(`${cosPrefix}/aircraft/`)
});
Router.get('/resume', (req, res) => {
    //简历
    res.redirect(`${cosPrefix}/resume/resume.pdf`)
});Router.get('/xyBirthday', (req, res) => {
    //birthday
    res.redirect(`${cosPrefix}/zxyBirthday`)
});
module.exports = Router;
