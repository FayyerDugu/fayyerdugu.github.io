document.addEventListener('pjax:complete', fps);
document.addEventListener('DOMContentLoaded', fps);

function fps() {
  //if(window.localStorage.getItem("fpson")=="1"){ 
  //���Ҫʹ�����������������������Ч���Ͱ�����һ��ȡ��ע��
  var rAF = function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  }();
  var frame = 0;
  var allFrameCount = 0;
  var lastTime = Date.now();
  var lastFameTime = Date.now();
  var loop = function () {
    var now = Date.now();
    var fs = (now - lastFameTime);
    var fps = Math.round(1000 / fs);
    lastFameTime = now;
    // ���� 0���ڶ����Ŀ�ͷ����β��¼��ֵ�Ĳ�ֵ��� FPS
    allFrameCount++;
    frame++;
    if (now > 1000 + lastTime) {
      var fps = Math.round((frame * 1000) / (now - lastTime));
      if (fps <= 10) {
        var kd = `<span style="color:#bd0000">PowerPoint</span>`
      } else if (fps <= 30) {
        var kd = `<span style="color:red">Video</span>`
      } else if (fps <= 60) {
        var kd = `<span style="color:yellow">Laptop</span>`
      } else if (fps <= 144) {
        var kd = `<span style="color:green">Gaming</span>`
      } else {
        var kd = `<span style="color:#425aef">Aliens</span>`
      }
      document.getElementById("fps").innerHTML = `FPS:${fps} ${kd}`;
      frame = 0;
      lastTime = now;
    };
    rAF(loop);
  }
  loop();
  // }
  // else{$("#fps").hide()}
}
