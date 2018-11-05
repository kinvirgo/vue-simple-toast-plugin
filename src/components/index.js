import SimpleToastComponent from './vue-simple-toast-plugin.vue'
const SimpleToast = {};

SimpleToast.install = (Vue) => {
    const SimpleToastConstructor = Vue.extend(SimpleToastComponent);
    const instance = new SimpleToastConstructor();
    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);
    Vue.prototype.$Toast = {
        info(msg, opt = {}) {
            return instance.addNotice({
                type: 'info',
                duration: 2000,
                msg,
                ...opt
            })
        },
        success(msg, opt = {}) {
            return instance.addNotice({
                type: 'success',
                duration: 2000,
                msg,
                ...opt
            })
        },
        warn(msg, opt = {}) {
            return instance.addNotice({
                type: 'warn',
                duration: 2000,
                msg,
                ...opt
            })
        },
        error(msg, opt = {}) {
            return instance.addNotice({
                type: 'error',
                duration: 2000,
                msg,
                ...opt
            })
        },
        load(msg, opt = {}) {
            return instance.addNotice({
                type: 'load',
                msg,
                ...opt,
                duration: 0
            })
        }
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(SimpleToast);
}

export default SimpleToast
