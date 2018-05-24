$(document).ready(function(){
    var ht =$(window).height();
    
    $("#container").css("height",ht);
    
    
    $(".elevator_sw").click(Event, function(){
        $("#left_door").animate({right:"300px"},4000);
        $("#right_door").animate({right:"300px"},3000);
        $("#button_area"
    });
    
    
    $("#button_3").click(function(){
        $(".floor").removeClass("on");
        $("#move_ele").animate({top:"50px"},3000,"easeInOutQuad");
        $("#floor_3").addClass("on");
    });
    $("#button_2").click(function(){
        $(".floor").removeClass("on");
        $("#move_ele").animate({top:"300px"},3000,"easeInOutQuad");
        $("#floor_2").addClass("on");
    });
    $("#button_1").click(function(){
        $(".floor").removeClass("on");
        $("#move_ele").animate({top:"550px"},3000,"easeInOutQuad");
        $("#floor_1").addClass("on");
    });
});