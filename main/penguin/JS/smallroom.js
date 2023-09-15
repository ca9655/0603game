$(document).ready(function(){
    var book1 = 0;
    var book2 = 0;
    var book3 = 0;
    var book4 = 0;
    var book5 = 0;
    const speed = 40;
    var stop = false;

    $(".carpet").click(
        function(){
            fadeIn();
            var str = ["毛茸茸的地毯！！", "嗚嗚哇喔喔喔！！！！！", "もふもふ～(* ¯ ︶ ¯ *)"];
            text(str);
        }
    );

    $(".sofanormal").click(
        function(){
            fadeIn();
            var str = ["很炫的紅色皮沙發，不知道是不是真皮", "坐起來還挺舒服的", "如果這裡離我家只有一條街遠的話，我應該會直接搬回家。"];
            text(str);
        }
    );

    $(".pillow").click(
        function(){
            $(".sofanormal").hide();
            $(".pillow").hide();
            $(".sofapaper").show();
        }
    );

    $(".book").click(
        function(){
            if(!Boolean(book1)){
                fadeIn();
                var str = ["這個是......那邊那台奇怪機器人的說明書？", "等等！這裡有段神秘文字，讓我看看......"];
                text(str);
                book1 = 1;
            }else if(!Boolean(book2)){
                fadeIn();
                var str = ["「當以心通讀是卷之初，獲悉此信息；", "再者臨觀是卷之際，女僕自奉而脫其衣，猶有顏色颺然世懷；", "五懷之卷者，纖痕幽幽紙之啟示，其玄奧莫測，令人摩嘆之不已；", "觀卷百次，虛無之無涯而空無所有，涵蓄萬象之虛林深處，", "難以窺知其所至，讓人如飛蛾扑火而無所獲。」"];
                text(str);
                book2 = 1;
            }else if(!Boolean(book3)){
                fadeIn();
                var str = ["只是一本使用手冊。"];
                text(str);
                $(".robot1").hide();
                $(".robot2").show();
                book3 = 1;
            }else if(!Boolean(book4)){
                fadeIn();
                var str = ["只是一本使用手冊。"];
                text(str);
                book4 = 1;
            }else if(!Boolean(book5)){
                fadeIn();
                var str = ["......"];
                text(str);
                $(".robot2").hide();
                $(".robot3").show();
                book5 = 1;
            }else{
                fadeIn();
                var str = ["恭喜獲得隱藏成就《徒勞無功》"];
                text(str);
            }
        }
    );

    $(".robot1").click(
        function(){
            fadeIn();
            var str = ["這是某種機器人……？", "而且他穿的是……女僕裝？", "但他現在似乎沒有在運作，或許我該想辦法開啟它"];
            text(str);
        }
    );

    $(".robot2").click(
        function(){
            fadeIn();
            var str = ["主人好，我是您的專屬女僕，", "如果您有任何需要幫助的問題，我不會回答。", "如果您不需要與我交流，您可以直接離開。"];
            text(str);
        }
    );

    $(".food").click(
        function(){
            fadeIn();
            var str = ["看起來很好吃的食物，說起來我多久沒吃東西了呢？", "糟糕，肚子開始餓了……", "偷拿一個，應該不會怎樣吧？", "可是萬一裡面下了毒，我會不會直接死在這？", "算了，還是不要隨便亂動好了"];
            text(str);
        }
    );

    $(".garbage").click(
        function(){
            fadeIn();
            var str = ["一堆廢紙", "對就是一堆廢紙，就好比我的人生......嗚", "說著說著就哭了；；"];
            text(str);
        }
    );

    $(".door").click(
        function(){
            fadeIn();
            var str = ["目前是封死的，似乎需要解開密碼鎖才能打開"];
            text(str);
        }
    );

    $(".net").click(
        function(){
            fadeIn();
            var str = ["女僕手上的撈網", "感覺可以用來撈在水裡的某樣東西"];
            text(str);
        }
    );

    $(".lgrassnormal").click(
        function(){
            fadeIn();
            var str = ["海草啊～海草，隨～風～飄～搖～", "喔等等，其實這是水草。"];
            text(str);
            $(".lgrassnormal").hide();
            $(".lgrasspaper").show();
        }
    );

    $(".rlightclose").click(
        function(){
            $(".rlightclose").hide();
            $(".rlightpaper").show();
        }
    );

    $(".llightclose").click(
        function(){
            $(".llightclose").hide();
            $(".llight").show();
        }
    );

    $(".llight").click(
        function(){
            $(".llight").hide();
            $(".llightclose").show();
        }
    );

    $(".lbookcase").click(
        function(){
            fadeIn();
            var str = ["來看看這裡有什麼書好了！", "痾……", "《關於我轉生到異世界意外成為建電學術長的這檔事》、《霸道總裁愛上我》、《我想吃掉你的肝臟》..........", "怎麼都是一堆輕小說啊 但意外的很符合我的喜好"];
            text(str);
        }
    );

    $(".rbookcase").click(
        function(){
            fadeIn();
            var str = ["來看看這裡有什麼書好了！", "痾……", "《爆肝工程師的日常》、《關於我在無意間被隔壁的電神變成廢柴這件事》、《歡迎來到實力至上主義的社團》..........", "怎麼都是一堆輕小說啊 但意外的很符合我的喜好"];
            text(str);
        }
    );

    $(".fish").click(
        function(){
            fadeIn();
            var str = ["好美的水族箱啊～", "等等，裡面的魚怎麼不會動？", "嗚哇！原來是假的嗎！？", "有夠詭異。"];
            text(str);
        }
    );

    $(".continue").click(
        function(){
            clean();
        }
    );


    function text(str){
        $(".p").empty();
        var time = 0;
        for(var i = 0; i<str.length; i++){
            for(var j = 0; j<str[i].length; j++){
                while(Boolean(stop)){
                    $(".p").empty();
                    return;
                }
                (function(i, j) {
                    setTimeout(function(){
                        while(Boolean(stop)){
                            $(".p").empty();
                            return;
                        }
                        $(".p").append(str[i][j]);
                        if(j === str[i].length - 1) {
                            $(".p").append("<br>");
                        }
                    }, time);
                })(i, j);
            time += speed;
            }
        }
    }
    
    function fadeIn(){
        stop = true;
        $(".p").empty();
        $(".black").fadeIn(500);
        $(".p").fadeIn(300);
        $(".continue").fadeIn(500);
        stop = false;
    }

    function clean(){
        stop = true;
        $(".black").fadeOut(300);
        $(".p").fadeOut(300);
        $(".continue").fadeOut(300);
        $(".p").empty();
    }
    
});