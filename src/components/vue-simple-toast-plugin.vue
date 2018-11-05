<template>
<transition-group name='fade' tag='div' class="t-toast-root">
    <div v-for="(item, index) in notices" class='t-toast-section' :key="item.key" :class="`UI-${item.theme}`" :style="item.section">
        <div class="t-toast-icon" :class="`t-toast-${item.type}`"></div>
        <!-- v-text -->
        <template v-if="item.vHtml">
            <div class="t-toast-message" :style="item.message" v-html="item.msg"></div>
        </template>
        <!-- v-html -->
        <template v-else>
            <div class="t-toast-message" :style="item.message">{{item.msg}}</div>
        </template>
    </div>
</transition-group>
</template>
<script>
export default {
    name: "SimpleToast",
    data: () => ({
        notices: [],
        transitionTime: 200,
        option: {
            vHtml: false, //渲染v-html、v-text
            theme: 'light', //主题目前支持 light、dark
            section: {
                // 自定义section 样式
            },
            message: {
                // 自定义message 样式
            }
        }
    }),
    methods: {
        addNotice(notice) {
            const {
                notices,
                createNoticeKey,
                option
            } = this;
            notice.key = createNoticeKey();
            const {
                duration,
                key
            } = notice;
            if (notices.every(item => item.key !== key)) {
                // 如果key唯一就添加至消息列表中
                this.notices.unshift({ ...option,
                    ...notice
                });
                // 注册移除
                if (!!notice.duration && notice.duration > 0) {
                    setTimeout(() => {
                        this.removeNotice(key);
                    }, duration)
                }
            }
            // 返回立即取消函数
            return () => {
                this.removeNotice(key)
            }
        },
        createNoticeKey() {
            const {
                notices
            } = this;
            return `SimpleToast-${new Date().getTime()}-${notices.length}`
        },
        removeNotice(key) {
            const {
                notices,
                transitionTime
            } = this;
            this.notices = notices.filter((item, index) => {
                if (item.key === key) {
                    // 注册关闭回调函数
                    if (Object.prototype.toString.call(item.onClose) === "[object Function]") {
                        // 注意这里一定要异步
                        setTimeout(item.onClose, transitionTime);
                    }
                    return false;
                } else {
                    return true;
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
@import './vue-simple-toast-plugin.scss'
</style>
