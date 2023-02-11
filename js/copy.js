var button = document.getElementById("debounce");
const debounce = (func, delay) => {
  let debounceTimer
  return function () {
    const context = this
    const args = arguments
    clearTimeout(debounceTimer)
    debounceTimer
      = setTimeout(() => func.apply(context, args), delay)
  }
}
document.addEventListener("copy", debounce((e) => {
  new Vue({
    data: function () {
      this.$notify({
        title: "复制成功!",
        message: "📖 注意缩进",
        position: "top-left",
        offset: 50,
        showClose: true,
        type: "success",
        duration: 5000,
      });
    },
  });
}, 500));
