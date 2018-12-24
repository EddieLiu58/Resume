var elem = document.getElementById( "Head" )
var headroom = new Headroom( elem, {
// 參數設定[註1]
"offset": 100, // 當捲軸到哪時，取消固定
"tolerance": 1,
    "scroller": window, // 捲軸
    "classes": {
        "initial": "animated", // 初始的類別
        "pinned": "bounceInDown", // 固定時新增的類別(這裡運用Animate.css的類別)
        "unpinned": "bounceOutUp", // 取消固定時新增的類別(這裡運用Animate.css的類別)
        "top": "headroom--top", // 當捲軸在最上面時新增的類別
        "notTop": "headroom--not-top", // 當捲軸不在最上面時新增的類別
        "bottom": "headroom--bottom", // 當捲軸在最下面時新增的類別
        "notBottom": "headroom--not-bottom" // 當捲軸不在最下面時新增的類別
    },
});