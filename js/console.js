var now1 = new Date();

function createtime1() {
    var grt = new Date("01/01/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎各位。`,
        `
        (¯\`·¯\`·.¸¸.··´¯)
        ( \\          / )
         ( ) Fayyer ( ) 
          (/        \\)  
           (.·´¯\`·.¸)           
        ` ,
        "网站已经运行",
        dnum,
        "天了。",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}\n`,
            "color:#f54e20",
            "color:#4f10e3",
            "color:#f54e20",
            "color:#f54e20",
            "color:#f54e20",
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `前置拍照成功，识别为大聪明: 🤪 `];
    setTimeout(console.log.bind(console, "%c W23-12 %c 已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };