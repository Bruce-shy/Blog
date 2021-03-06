module.exports = {
  theme: 'reco',
  title: '是你的lemon呀',
  description: `欢迎来到我的 blog`,
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    type: 'blog',
    /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    author: '你的lemon呀',
    authorAvatar: '/logo.jpeg',
    // 备案
    record: '赣ICP备20009270号',
    recordLink: 'https://beian.miit.gov.cn/',
    // 项目开始时间，只填写年份
    startYear: '2021',
    noFoundPageByTencent: false,
    codeTheme: 'okaidia', // default 'tomorrow'
    sidebarDepth: 2, // e'b将同时提取markdown中 h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件 git 最后提交的时间
    nav: [ //    导航栏配置
      {
        text: '笔记',
        link: '/pages/note/JavaScript/JavaScript知识点总结.html',
        icon: 'reco-document'
      }, // 内部链接 以docs为根目录
      {
        text: '掘金',
        link: 'https://juejin.im/user/5dac2f786fb9a04e235779db',
        icon: 'reco-juejin'
      },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        icon: 'reco-github',
        link: 'https://github.com/Bruce-shy/',
      },
      {
        text: '项目展示',
        icon:'reco-coding',
        items: [{
          text: 'jike-time',
          link: 'http://nidelemonya.cn/build'
        },
      ]
      }
    ],
    sidebar: { //   侧边栏配置
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/pages/note': [
        {
          title: 'JavaScript', 
          collapsable:true, 
          sidebarDepth: 2,
          children: [
            ['../pages/note/JavaScript/async-await.md','async-await'],
            ['../pages/note/JavaScript/deep-clone.md','深克隆'],
            ['../pages/note/JavaScript/Event-loop.md','事件循环'],
            ['../pages/note/JavaScript/instanceof.md','实现instanceof'],
            ['../pages/note/JavaScript/JavaScript知识点总结.md','JavaScript知识点总结'],
            ['../pages/note/JavaScript/new.md','请你实现一个new'],
            ['../pages/note/JavaScript/object.create.md','实现object.create'],
            ['../pages/note/JavaScript/Promise.md','Promise'],
            ['../pages/note/JavaScript/Proxy.md','Proxy'],
            ['../pages/note/JavaScript/this.md','this'],
            ['../pages/note/JavaScript/webpack.md','webpack'],
            ['../pages/note/JavaScript/从输入url到页面加载完成发生了啥.md','从输入url到页面加载完成发生了啥'],
            ['../pages/note/JavaScript/继承与原型链.md','继承与原型链'], // 以docs为根目录来查找文件 
            ['../pages/note/JavaScript/箭头函数和普通函数的区别.md','箭头函数和普通函数的区别'],
            ['../pages/note/JavaScript/防抖和节流.md','防抖和节流'],
          ]
        },
        {
          title: '计算机网络', 
          collapsable:true, 
          sidebarDepth: 2,
          children: [
            ['../pages/note/计算机网络/Http协议.md','Http协议'],
            ['../pages/note/计算机网络/Http缓存.md','Http缓存'],
            ['../pages/note/计算机网络/网络安全.md','网络安全'],
            ['../pages/note/计算机网络/跨域.md','跨域'],
          ]
        },
        {
          title: 'Css', 
          collapsable:true, 
          sidebarDepth: 2,
          children: [
            ['../pages/note/Css/Css.md','Css'],
          ]
        },
        // {
        //   title: '面经', 
        //   collapsable:true, 
        //   sidebarDepth: 2,
        //   children: [
        //     ['../pages/note/面经/子寒-面经.md','子寒-面经'],
        //   ]
        // }
        {
          title: '算法', 
          collapsable:true, 
          sidebarDepth: 2,
          children: [
            ['../pages/note/算法/数组.md','数组'],
          ]
        },
        {
          title: '框架', 
          collapsable:true, 
          sidebarDepth: 2,
          children: [
            ['../pages/note/框架/React.md','React'],
          ]
        },
        {
          title: '操作系统', 
          collapsable:true, 
          sidebarDepth: 2,
          children: [
            ['../pages/note/操作系统/计算机操作系统.md','计算机操作系统'],
          ]
        }
      ]
    }
  },
  // 博客配置
  blogConfig: {
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: 'Tag'      // 默认文案 “标签”
    }
  },
  plugins: [
    // [
    //   "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    //   {
    //     theme: ["shizuku"],
    //     clean: true,
    //     modelStyle: {
    //       right: "30px",
    //       bottom: "0px",
    //       opacity: "0.9",
    //       zIndex: 99999
    //     }
    //   }
    // ],
    [
      "cursor-effects",
      {
        size: 2,                    
        shape: ['star'],  
        zIndex: 999999999
      }
    ],
  //   [
  //     "@vuepress-reco/vuepress-plugin-bgm-player",
  //     {
  //       audios: [
  //         {
  //           name: '告白之夜',
  //           artist: 'Ayasa绚沙',
  //           url: '/bgm/night.mp3',
  //           cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2613879787,2147200089&fm=26&gp=0.jpg'
  //         },
  //         {
  //           name: 'lemon',
  //           artist: '米津玄师',
  //           url: '/bgm/lemon.mp3',
  //           cover: 'http://p1.music.126.net/6IeZ9MiSSDXifj74nzH6ww==/109951163561494000.jpg'
  //         }
  //       ],
  //       position: { 
  //         left: '10px', 
  //         bottom: '10px', 
  //         'z-index': '999999'
  //       },
  //       autoShrink: true,
  //       shrinkMode: 'float',
  //       floatPosition:'left',
  //       floatStyle: { bottom: '100px', 'z-index': '999999' }
  //     }
  //   ]
  ]
}