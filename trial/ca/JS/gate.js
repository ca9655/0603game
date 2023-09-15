$(document).ready(function(){
    var n;

    $(".b1").click(
        function(){
            n = 10 * Number($(".input").val());
            $("input").val(n + 1);
        }
    );

    $(".b2").click(
        function(){
            n = 10 * Number($(".input").val());
            $("input").val(n + 2);
        }
    );

    $(".b3").click(
        function(){
            n = 10 * Number($(".input").val());
            $("input").val(n + 3);
        }
    );

    $(".b4").click(
        function(){
            n = 10 * Number($(".input").val());
            $("input").val(n + 4);
        }
    );

    $(".b5").click(
        function(){
            n = 10 * Number($(".input").val());
            $("input").val(n + 5);
        }
    );

    $(".b6").click(
        function(){
            n = 10 * Number($(".input").val());
            $("input").val(n + 6);
        }
    );

    $(".b7").click(
        function(){
            n = 10 * Number($(".input").val());
            $("input").val(n + 7);
        }
    );

    $(".b8").click(
        function(){
            n = 10 * Number($(".input").val());
            $("input").val(n + 8);
        }
    );

    $(".b9").click(
        function(){
            n = 10 * Number($(".input").val());
            $("input").val(n + 9);
        }
    );

    $(".enter").click(
        function enter(){
            n = Number($(".input").val());
            if(n === 8651){
                alert("喀噠，門開了……")
                $(location).attr("href","../HTML/success.html")
            }else{
                alert("什麼都沒發生……")
            }
        }
    );

});