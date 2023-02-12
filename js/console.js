var now1 = new Date();

function createtime1() {
  var grt = new Date("08/09/2022 00:00:00"); //此处修改你的建站时间或者网站上线时间
  now1.setTime(now1.getTime() + 250);
  var days = (now1 - grt) / 1000 / 60 / 60 / 24;
  var dnum = Math.floor(days);
  var ascll = [

        `
        _______ _______ __   __ __   __ _______  ______
        |______ |_____|   \_/     \_/   |______ |_____/
        |       |     |    |       |    |______ |    \_
                                                                                            
`,
    ];
}
createtime1();

function createtime2() {
  setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台",
    "color:white; background-color:#4f90d9", ""));
  setTimeout(
    console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中",
      "color:white; background-color:#d9534f", "")
  );
}
createtime2();
// 重写console方法
console.log = function () {};
console.error = function () {};
console.warn = function () {};
