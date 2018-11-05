<template>
    <div>
        <button type="button" @click="info">info</button>
        <button type="button" @click="success">success</button>
        <button type="button" @click="warn">warn</button>
        <button type="button" @click="error">error</button>
        <button type="button" @click="load">load</button>
    </div>
</template>
<script>
export default {
    name: "App",
    data: () => ({

    }),
    methods: {
        info: function() {
            this.$Toast.info('this is test', {
                // duration : 20000,
            })
        },
        success: function() {
            this.$Toast.success('this is test', {
                // duration : 20000,
            })
        },
        warn: function() {
            this.$Toast.warn('警告!', {
                // duration : 20000,
            })
        },
        error: function() {
            this.$Toast.error('填写错误', {
                // duration : 20000,
            })
        },
        load: function() {
            var _this = this;
            var t = this.$Toast.load('加载中...', {
                // duration : 20000,
                onClose: function() {
                    _this.$Toast.success('加载完成！', {
                        // duration : 20000,
                    })
                }
            });
            setTimeout(t, 5000);
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
