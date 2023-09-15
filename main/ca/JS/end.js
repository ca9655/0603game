$(document).ready(function(){

    var str1 = ["謝謝你玩到這裡"];
    var time1 = 0;
    for(var i = 0; i<str1.length; i++){
        for(var j = 0; j<str1[i].length; j++){
            (function(i, j) {
                setTimeout(function(){
                    $(".thanks").append(str1[i][j]);
                    if(j === str1[i].length - 1) {
                        $(".thanks").append("<br>");
                    }
                }, time1);
            })(i, j);
            time1 += 100;
        }
    }

    var str2 = ["組員", "網頁架構", "北資一四 謝熒栩 烤企鵝", "北資一四 吳沁恩 小卡", "北資一四 林湘芸 芸", "美術設計", "北資一四 王小鏡 小鏡", ""];
    var time2 = time1;
    for(var i = 0; i<str2.length; i++){
        for(var j = 0; j<str2[i].length; j++){
            (function(i, j) {
                setTimeout(function(){
                    $(".name").append(str2[i][j]);
                    if(j === str2[i].length - 1) {
                        $(".name").append("<br>");
                    }
                }, time2);
            })(i, j);
            time2 += 100;
        }
    }

    var str3 = ["感謝", "技術指導", "北資一三 蘇怡恩 嗯嗯"];
    var time3 = time2;
    for(var i = 0; i<str3.length; i++){
        for(var j = 0; j<str3[i].length; j++){
            (function(i, j) {
                setTimeout(function(){
                    $(".spe").append(str3[i][j]);
                    if(j === str3[i].length - 1) {
                        $(".spe").append("<br>");
                    }
                }, time3);
            })(i, j);
            time3 += 100;
        }
    }

});