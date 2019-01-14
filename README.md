# vue-simple-toast-plugin

安装
---
```
npm i vue-simple-toast-plugin
yarn add vue-simple-toast-plugin
```

使用
---
```
//es7
const Vue from 'vue'
const SimpleToast from 'vue-simple-toast-plugin'
Vue.use(SimpleToast)
...
this.$Toast.info("this is test.")

//es6
var Vue = require('vue')
var SimpleToast = require('vue-simple-toast-plugin')
...
```

## 参数
-   msg [String] : 展示的内容
-   option [Object] 可选:  扩展配置
    -   vHtml [Boolean] : 渲染方式以html渲染,默认false

效果展示
---
```
this.$Toast.info(...)
```
![](./resources/info.jpg '消息')
```
this.$Toast.success(...)
```
![](./resources/success.jpg '成功')
```
this.$Toast.warn(...)
```
![](./resources/warn.jpg '警告')
```
this.$Toast.error(...)
```
![](./resources/error.jpg '错误')
```
this.$Toast.load(...)
```
![](./resources/load.jpg '加载')
