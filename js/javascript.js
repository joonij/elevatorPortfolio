$(document).ready(function(){
    var ht =$(window).height();
    
    $("#container").css("height",ht);
    
    $("#button_3").click(function(){
        $(".floor").removeClass("on");
        $("#elevator").animate({top:"0px"},3000,"easeInOutQuad");
        $("#floor_3").addClass("on");
    });
    $("#button_2").click(function(){
        $(".floor").removeClass("on");
        $("#elevator").animate({top:"250px"},3000,"easeInOutQuad");
        $("#floor_2").addClass("on");
    });
    $("#button_1").click(function(){
        $(".floor").removeClass("on");
        $("#elevator").animate({top:"500px"},3000,"easeInOutQuad");
        $("#floor_1").addClass("on");
    });
});