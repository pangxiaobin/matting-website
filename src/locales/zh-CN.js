export default {
  nav: {
    home: '首页',
    download: '下载',
    detail: '详情',
    fqa: '问题',
    sponsor:'赞助',
  },
  baseInfo: {
    title1: '免费开源',
    title2: '离线&内置AI',
    desc: '小宾AI抠图应用，使用开源模型 briaai/RMBG-1.4实现图像抠图,支持单张图像拖拽、粘贴图像和连接、和批量抠图，支持多种格式的证件照制作、支持单张和批量图像格式转换、支持单张和批量图像压缩。',

  },
  download: {
    title: '下载',
    tips: '注意及时转存，避免链接失效。',
    baidu: '百度网盘下载',
    quark: '夸克网盘下载',
    uc: 'UC网盘下载',
    github: 'gitHub releases 下载',
  },
  detail: {
    matting: {
      title: 'AI抠图',
      desc: '离线、注册登录、永久免费。支持单张抠图和批量抠图, 可拖拽、粘贴图片、粘贴图片链接、支持jpg/png/gif/webp/bmp',
      feature1: '开源免费',
      feature2: '支持单张和批量',
      feature3: '支持多种格式',
    },
    certificate: {
      title: 'AI证件照',
      desc: '上传你的生活照片，利用AI技术自动抠出证件照，并生成证件照背景图。',
      feature1: '开源免费',
      feature2: '多种图片格式',
      feature3: '各种证件规格',
    },
    convert: {
      title: '图片格式转换',
      desc: '将图片转换为其他格式，简单易用、快速转换、本地转换、数据安全。',
      feature1: '开源免费',
      feature2: '支持单张和批量',
      feature3: '支持多种格式',
    },
    compress: {
      title: '图片压缩',
      desc: '压缩图片大小，减少图片体积，提高加载速度，支持jpg/png/webp，支持单张和批量，需要配置tinypng key。',
      feature1: '开源免费',
      feature2: '支持单张和批量',
      feature3: '支持失败重试',
    },
  },
  fqa: {
    title: '常见问题',
    fqas: [{
        question: '为什么要使用小宾AI抠图应用？',
        answer: '小宾AI抠图应用，使用开源模型 briaai/RMBG-1.4实现图像抠图,支持单张图像拖拽、粘贴图像和链接、批量抠图。支持多种格式的证件照制作、支持单张和批量图像格式转换。'
      },
      {
        question: '如何使用小宾AI抠图应用？',
        answer: '1. 下载并安装小宾AI抠图应用。<br/>2. 打开应用，点击“单张抠图或者批量抠图”按钮。<br/>3. 选择后等待ai模型加载完成。<br/>4. 点击“保存”按钮，保存抠图后的图片。<br/>5. 点击“退出”按钮，关闭应用。'
      },
      {
        question: '如何使用小宾AI证件照制作？',
        answer: '1. 下载并安装小宾AI证件照制作。<br/>2. 打开应用，点击“证件照”导航栏按钮。<br/>3. 选择证件照图片，点击“上传照片”按钮。<br/>4. 选择规格。<br/>5. 调整规格，回车确认。<br/>6. 选择背景，然后保存。<br/>7. 点击“退出”按钮，关闭应用。'
      },
      {
        question: '如何使用小宾AI图片格式转换？',
        answer: '1. 下载并安装小宾AI图片格式转换。<br/>2. 打开应用，点击“图片格式转换”按钮。<br/>3. 选择需要转换的图片，点击“转换”按钮。<br/>4. 选择转换后的图片格式，点击“转换”按钮。<br/>5. 等待转换完成。<br/>6. 点击“保存”按钮，保存转换后的图片。<br/>7. 点击“退出”按钮，关闭应用。'
      },
      {
        question: '如何使用小宾AI图片压缩？',
        answer: '1. 下载并安装小宾AI图片压缩。<br/>2. 打开应用，点击“图片压缩”按钮。<br/>3. 选择需要压缩的图片，点击“压缩”按钮。<br/>4. 等待压缩完成' + '<br/>注意：需要配置tinypng key，申请地址：https://tinypng.com/developers'
      },
      {
        question: 'windows系统下，如果出现无法启动客户端或者启动后白屏？',
        answer: '本项目使用pywebview开发，在windows系统下会查找edgechromium ，edgehtml， mshtml 的客户端引擎依次检索。如果本地电脑 edge 浏览器支持这些引擎，则客户端可以正常启动。否则，需要安装对应的 <a style="color: blue; text-decoration: underline;" href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/?form=MA13LH" >EdgeWebView2Runtime 浏览器引擎。</ a>'
      }
    ],
  },sponsor: {
    title: '赞助',
    desc: '如果我的项目对你有所帮助，可以使用微信赞赏支持我，感谢！',
  }
};