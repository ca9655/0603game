$(document).ready(function(){

    alert("你完成了ESCAPE！！");

    var str = ["隨著門的開啟，一道刺眼的陽光照射進來。", 
    "眼睛還來不及睜開，一陣酷熱的風夾帶著沙塵迎面而來，", 
    "你勉強睜開了眼，望向眼前的漫漫黃沙，你愣住了……", 
    "欲知後續，且聽下回分解（X）",
    "請洽開學後的社課！（O）"];
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