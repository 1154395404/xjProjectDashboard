// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function getRandomStack(type) {
//     const testStack = ['Java', 'Python', 'C++', 'JavaScript', 'MySQL', 'GitHub', ' IntelliJ IDEA', 'C', 'HTML5', 'Git', 'Eclipse', 'Spring', 'Ubuntu', 'PyCharm', 'Apache Tomcat', ' Spring-Boot', ' Visual Studio Code', 'Redis', 'Notepad++', 'MATLAB', 'Markdown', 'Visual Studio', 'Sublime Text', 'Vue.js', ' Postman', 'Bootstrap', 'PHP', 'Node.js', 'jQuery', 'Centos', 'Adobe Photoshop', 'Vim', 'Apacha Maven', 'Docker', 'Nginx', 'C#', 'ES6', 'Go', 'Hadoop', 'GitLab', 'Android Studio', 'Jupyter', 'MongoDB', 'npm', ' Stack Overflow', 'VirtualBox', 'WebStorm', 'Android SDK', 'Oracle', 'Django', 'TEnsorFlow', 'GitHub Pages', 'Unity', 'R', 'SpringCloud', 'Jenkins', 'React', 'JUnit', 'Apache Spark', 'Microsoft SQL Server', 'SVN', 'Kafka', 'NumPy', 'OpenCV', 'Zookeeper', 'Webpack', 'SQLite', 'Pandas', 'Flask', 'scikit-learn'];
//     const stack = [];
//     for (let i = 0; i < getRndInteger(5, 15); i++) {
//         stack.push(testStack[getRndInteger(0, testStack.length - 1)])
//     }
//     return stack;
// }
//
// function getRandomDescription(type) {
//     const testStack = ['Java', 'Python', 'C++', 'JavaScript', 'MySQL', 'GitHub', ' IntelliJ IDEA', 'C', 'HTML5', 'Git', 'Eclipse', 'Spring', 'Ubuntu', 'PyCharm', 'Apache Tomcat', ' Spring-Boot', ' Visual Studio Code', 'Redis', 'Notepad++', 'MATLAB', 'Markdown', 'Visual Studio', 'Sublime Text', 'Vue.js', ' Postman', 'Bootstrap', 'PHP', 'Node.js', 'jQuery', 'Centos', 'Adobe Photoshop', 'Vim', 'Apacha Maven', 'Docker', 'Nginx', 'C#', 'ES6', 'Go', 'Hadoop', 'GitLab', 'Android Studio', 'Jupyter', 'MongoDB', 'npm', ' Stack Overflow', 'VirtualBox', 'WebStorm', 'Android SDK', 'Oracle', 'Django', 'TEnsorFlow', 'GitHub Pages', 'Unity', 'R', 'SpringCloud', 'Jenkins', 'React', 'JUnit', 'Apache Spark', 'Microsoft SQL Server', 'SVN', 'Kafka', 'NumPy', 'OpenCV', 'Zookeeper', 'Webpack', 'SQLite', 'Pandas', 'Flask', 'scikit-learn'];
//     let str = '';
//     for (let i = 0; i < getRndInteger(5, 25); i++) {
//         str += testStack[getRndInteger(0, testStack.length - 1)];
//     }
//     return str;
// }
//
// for (let i = 0; i < 20; i++) {
//     testData.push({
//         target: '/chat',
//         cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//         title: 'I-Chat',
//         description: getRandomDescription(),
//         frontStack: getRandomStack(),
//         backStack: getRandomStack(),
//     })
// }
const hardColor = 'red'
const remarkColor = '#2177cd'
const coverPrefix = 'https://web-1301368439.cos-website.ap-beijing.myqcloud.com/projectCover/';

function noticeHtml(text) {
    return `<h2 style="color: coral">${text}</h2>`
}

module.exports = [
    {
        target: '/j_swiper',
        cover: coverPrefix + 'j_swiper.png',
        title: 'J-Swiper组件',
        description: '一款原生JS轮播组件 <br>特点： <br>原生、轻量、支持PC与Mobile、在非Vue/React项目优势显著、标签属性化写法（类似 Element-ui属性化配置）',
        frontStack: ['Javascript'],
        backStack: [],
        time: {
            start: '2022.03.04',
            end: '2022.03.17',
        },
        other: `技术难点：<p style="color: ${hardColor}">组件设计模式、swiper边缘过渡页面的数据实时更新、可插拔式标签属性配置</p>`
    }, {
        target: '/i_remember',
        cover: coverPrefix + 'i_remember.png',
        title: 'I_Remember-记忆助手',
        description: '一款可以帮助学生党提高知识牢固性的知识复习App（根据学生上传的学习知识，来合理安排这个知识的复习计划）',
        frontStack: ['Uniapp', 'Uview', 'Vue', 'Vuex','Element-ui'],
        backStack: ['Node.js', 'Express', 'Mongodb'],
        time: {
            start: '2021.09.04',
            end: '2021.09.25',
        },
        other: `技术难点：<p style="color: ${hardColor}">前端：多端的适配（安卓、ios、网页）、UI设计<br> 后端：根据艾宾浩斯遗忘曲线进行合理的知识推送<br>其他：0到1的项目构思与实现</p>
                备注：<p style="color: ${remarkColor}">已在学校班级进行推广、帮助了一些同学、获得了许多好评🥳</p>
`
    }, {
        target: '/qiuqiu',
        cover: coverPrefix + 'qiuqiu.png',
        title: '大球吃小球-多人对战游戏',
        description: '一款类型球球大作战实时对战游戏',
        frontStack: ['Uniapp', 'Vue',],
        backStack: ['Node.js', 'Express', 'Mongodb', 'Websocket'],
        time: {
            start: '2022.04.16',
            end: '2022.05.02',
        },
        other: `技术难点：<p style="color: ${hardColor}">前端：摇杆的拖动实现 边缘检测 以及速度计算算法、自己的中心视角移动算法、食物的碰撞检测算法<br> 后端：大量实时位置坐标计算、食物合理生成算法</p>
         ${noticeHtml('由于实时网络原因，这个项目还暂不能提供访问')}
`
    },
    {
        target: '/chat',
        cover: coverPrefix + 'chat.png',
        title: 'I-Chat',
        description: '一款类似QQ的实时在线聊天项目、支持在线添加好友、聊天历史记录保存',
        frontStack: ['JQuery', 'Bootstrap','Layui'],
        backStack: ['Node.js', 'Express', 'Mongodb', 'Socket.io'],
        time: {
            start: '2021.03.15',
            end: '2021.03.26',
        },
        other: `技术难点：<p style="color: ${hardColor}">前端：消息的判断与广播拦截（需要搞清楚是谁给谁发的消息）、好友列表的实时排序、添加好友的广播拦截<br> 后端：聊天记录数据库表设计、好友重复申请（已发送、已成为好友）拦截</p>
         `
    },
    {
        target: '/dunion',
        cover: coverPrefix + 'dunion.jpeg',
        title: '滴滴联盟',
        description: '滴滴网约车部门活动运营平台',
        frontStack: ['React','TypeScript','Redux','React-Router'],
        backStack: [],
        time: {
            start: '2022.07.12',
            end: '2022.08.02',
        },
        other: `
         备注：<p style="color: ${remarkColor}">滴滴出行线上项目</p>
        `
    },
    {
        target: '/quanqiu',
        cover: coverPrefix + 'quanqiu.jpeg',
        title: '全球商城-国外钻井机售卖平台',
        description: '一款大型国外钻井进售卖网站',
        frontStack: ['PC端：', 'JQuery', 'Mobile端：', 'Vue', 'Vant'],
        backStack: [],
        time: {
            start: '2021.06.28',
            end: '2021.08.03',
        },
        other: `技术难点：<p style="color: ${hardColor}">大量的UI页面编写（PC+Mobile共180个子页）、并且PC没有采用UI组件 需手写大量UI交互</p>
   备注：<p style="color: ${remarkColor}">爱尚网络科技公司线上项目<br>公司个人独立开发</p>
         `
    },{
        target: '/hannong',
        cover: coverPrefix + 'hannong.jpg',
        title: '瀚农科技-唐山农产品商城',
        description: '一款线上的农产品售卖平台 类似于拼多多买菜服务',
        frontStack: ['Uniapp', 'Uview', 'Vue', 'Vuex'],
        backStack: [],
        time: {
            start: '2021.08.06',
            end: '2021.08.26',
        },
        other: `   备注：<p style="color: ${remarkColor}">爱尚网络科技公司线上项目</p>`
    }, {
        target: '/netMusic',
        cover: coverPrefix + 'netMusic.png',
        title: '云音乐小程序',
        description: '一款仿制网易云音乐的小程序',
        frontStack: ['原生微信小程序',],
        backStack: ['网易云音乐API'],
        time: {
            start: '2021.06.02',
            end: '2021.06.20',
        },
        other: `技术难点：<p style="color: ${hardColor}">时间 歌词与进度条三者的配合（歌词同步）</p>
       ${noticeHtml('由于原生微信小程序运行平台问题，还不能支持在线访问')}
         `
    }, {
        target: '/qmusic',
        cover: coverPrefix + 'qmusic.png',
        title: 'Q音乐',
        description: '一款仿制QQ音乐的音乐播放器',
        frontStack: ['JQuery'],
        backStack: ['Node.js', 'Express'],
        time: {
            start: '2020.07.04',
            end: '2020.07.16',
        }, other: `技术难点：<p style="color: ${hardColor}">时间 歌词与进度条三者的配合（歌词同步）</p>
            备注：<p style="color: ${remarkColor}">不仅仅是一个音乐播放器哦，而是一个以用户为中心的音乐平台</p>
         `
    },  {
        target: '/toutiao_m',
        cover: coverPrefix + 'toutiao.png',
        title: '头条新闻',
        description: '一款类似今日头条新闻浏览项目',
        frontStack: ['Vue', 'Vuex', 'Vue-Router', 'Vant', 'Axios', 'Webpack', 'Postcss'],
        backStack: [],
        time: {
            start: '2022.06.12',
            end: '2022.06.22',
        },

    },
    {
        target: '/bomb',
        cover: coverPrefix + 'bomb.jpeg',
        title: '扫雷',
        description: '一款扫雷游戏',
        frontStack: ['Javascript'],
        backStack: [],
        time: {
            start: '2020.04.03',
            end: '2020.04.17',
        }, other: `技术难点：<p style="color: ${hardColor}">空雷递归展开算法、游戏UI设计</p>
            备注：<p style="color: ${remarkColor}"> 学完Javascript后的第一个令自己满意度小项目、更加自信了为以后前端的学习信心 </p>
         `
    },
    {
        target: '/2048',
        cover: coverPrefix + '2048.jpeg',
        title: '2048游戏',
        description: '2048游戏',
        frontStack: ['Javascript'],
        backStack: [],
        time: {
            start: '2020.05.14',
            end: '2020.05.23',
        },
        other: `技术难点：<p style="color: ${hardColor}">数字方块移动合并算法、游戏UI设计</p>`
    },
    {
        target: '/aircraft',
        cover: coverPrefix + 'aircraft.jpeg',
        title: '全民飞机大战游戏',
        description: '一款类似腾讯全民飞机大战游戏',
        frontStack: ['Javascript'],
        backStack: [],
        time: {
            start: '2022.02.10',
            end: '2022.02.21',
        },
        other: `技术难点：<p style="color: ${hardColor}">物体的实时碰撞检测算法、飞机子弹发射效果多样性、飞机等级难度变化玩法、游戏UI设计</p>`
    }, 
]
