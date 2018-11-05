import Vue from 'vue'
import App from './app.vue'
// simple toast 的使用
import Toast from './components/index'
Vue.use(Toast);

new Vue({
    el : '#app',
    template : '<div><App /></div>',
    components: {
        App
    }
})
