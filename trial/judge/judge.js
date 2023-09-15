$(document).ready(function(){

    $(".submit").click(
        function enter(){
            var n = $(".ans").val();
            if(n === "XOXBDAD557"){
                alert("恭喜過關！！！")
                $("body").css("background-color", "#DCD2FA");
            }else{
                alert("好像有哪裡不太對？")
            }
        }
    );

});