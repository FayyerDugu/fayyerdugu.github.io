var card_author = {
  getTimeState: function () {
    var e = (new Date).getHours(),
      t = "";
    return 0 <= e && e <= 5 ? t = "Good Night 😴" : 5 < e && e <= 10 ? t =
      "Good Morning👋" : 10 < e && e <= 14 ? t = "Good Noon👋" : 14 < e &&
      e <= 18 ? t = "Good Afternoon👋" : 18 < e && e <= 24 && (t =
        "Good Evening👋"),
      t
  },
  sayhi: function () {
    var e = document.getElementById("author-info__sayhi");
    e && (e.innerHTML = card_author.getTimeState() + "！This is")
  },
}
card_author.sayhi();
