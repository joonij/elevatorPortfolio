$(document).ready(function(){
    var ht = $(window).height()
    
    $("#container").css("height",ht);
    
    if($("#floor_4").hasClass("on")) {
        $("#button_3").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"200px"},3000,"easeInOutQuad");
            $("#floor_3").addClass("on");
        });
        $("#button_2").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"400px"},3000,"easeInOutQuad");
            $("#floor_2").addClass("on");
        });
        $("#button_1").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"600px"},3000,"easeInOutQuad");
            $("#floor_1").addClass("on");
        });
    }
    else if($("#floor_3").hasClass("on")) {
        $("#button_4").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"200px"},3000,"easeInOutQuad");
            $("#floor_4").addClass("on");
        });
        $("#button_2").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"400px"},3000,"easeInOutQuad");
            $("#floor_2").addClass("on");
        });
        $("#button_1").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"600px"},3000,"easeInOutQuad");
            $("#floor_1").addClass("on");
        });
    }
    if($("#floor_2").hasClass("on")) {
        $("#button_4").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"200px"},3000,"easeInOutQuad");
            $("#floor_4").addClass("on");
        });
        $("#button_3").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"400px"},3000,"easeInOutQuad");
            $("#floor_3").addClass("on");
        });
        $("#button_1").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"600px"},3000,"easeInOutQuad");
            $("#floor_1").addClass("on");
        });
    }
    if($("#floor_1").hasClass("on")) {
        $("#button_4").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"200px"},3000,"easeInOutQuad");
            $("#floor_4").addClass("on");
        });
        $("#button_3").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"400px"},3000,"easeInOutQuad");
            $("#floor_3").addClass("on");
        });
        $("#button_2").click(function(){
            $(".floor").removeClass("on");
            $("#elevator").animate({top:"600px"},3000,"easeInOutQuad");
            $("#floor_2").addClass("on");
        });
    }
    
    
    
//    $("#button_4").click(function(){
//        $(".floor").removeClass("on");
//        $("#elevator").animate({top:"0px"},3000,"easeInOutQuad");
//        $("#floor_4").addClass("on");
//    });
//    $("#button_3").click(function(){
//        $(".floor").removeClass("on");
//        $("#elevator").animate({top:"200px"},3000,"easeInOutQuad");
//        $("#floor_3").addClass("on");
//    });
//    $("#button_2").click(function(){
//        $(".floor").removeClass("on");
//        $("#elevator").animate({top:"400px"},3000,"easeInOutQuad");
//        $("#floor_2").addClass("on");
//    });
//    $("#button_1").click(function(){
//        $(".floor").removeClass("on");
//        $("#elevator").animate({top:"600px"},3000,"easeInOutQuad");
//        $("#floor_1").addClass("on");
//    });
    
});