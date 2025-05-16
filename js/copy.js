document.addEventListener('copy', function () {
    new Vue({
        data: function () {
            this.$notify({
                title: "复制成功",
                message: "注意缩进",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "warning",
                duration: 5000
            });
        }
    })
})

