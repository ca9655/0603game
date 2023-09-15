$(document).ready(function(){

    alert("你完成了ESCAPE！！");

    var str = ["隨著門的開啟，一道刺眼的陽光照射進來。", 
    "眼睛還來不及睜開，一陣酷熱的風夾帶著沙塵迎面而來，", 
    "你勉強睜開了眼，望向眼前的漫漫黃沙，你愣住了。", 
    "你很清楚的知道，你無法在如此嚴酷的環境中生存下去，", 
    "那麼，至今為止為了逃出 (？) 的努力有任何意義嗎？", 
    "說到底，自己迄今為止的人生，是否存在任何價值？", 
    "感到絕望的你，轉過身回到了密室中，", 
    "輕輕關上了門……"];
    var time = 0;
    for(var i = 0; i<str.length; i++){
        for(var j = 0; j<str[i].length; j++){
            (function(i, j) {
                setTimeout(function(){
                    $(".div").append(str[i][j]);
                    if(j === str[i].length - 1) {
                        $(".div").append("<br>");
                    }
                }, time);
            })(i, j);
            time += 100;
        }
    }

    $(".next").fadeIn(15000);
    $(".next").click(function(){
        $(location).attr("href","../HTML/end.html")
    });
});