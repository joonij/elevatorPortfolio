$(document).ready(function(){
    var ht =$(window).height();
    
    $("#container").css("height",ht);
    
    $("#button_area").hide();
    
    $(".elevator_sw").click(Event, function(){
        $(".left_door").animate({right:"130px"},3000);
        $(".right_door").animate({left:"-65px"},3000);
        $("#button_area").show(3000);
    });
    
    
    $("#button_3").click(Event, function(){
        $("#button_area").hide(3000);
        $(".left_door").stop().animate({right:"65px"},3000);
        $(".right_door").stop().animate({left:"65px"},3000, function(){
            $(".floor_door, .floor").removeClass("on", function(){
                $("#button_area").stop().animate({top:"50px"},3000, function(){
                    $("#door_3, #floor_3").addClass("on", function(){
                        $(".left_door").delay(3000).stop().animate({right:"130px"},3000);
                        $(".right_door").delay(3000).stop().animate({left:"-65px"},3000, function(){
                            $(".left_door").stop().animate({right:"65px"},3000);
                            $(".right_door").stop().animate({left:"65px"},3000);
                        });
                    });
                });
            });
        });
    });
    $("#button_2").click(Event, function(){
        $("#button_area").hide(3000);
        $(".left_door").stop().animate({right:"65px"},3000);
        $(".right_door").stop().animate({left:"65px"},3000, function(){
            $(".floor_door, .floor").removeClass("on", function(){
                $("#button_area").stop().animate({top:"300px"},3000, function(){
                    $("#door_2, #floor_2").addClass("on", function(){
                        $(".left_door").delay(3000).stop().animate({right:"130px"},3000);
                        $(".right_door").delay(3000).stop().animate({left:"-65px"},3000, function(){
                            $(".left_door").stop().animate({right:"65px"},3000);
                            $(".right_door").stop().animate({left:"65px"},3000);
                        });
                    });
                });
            });
        });
    });
    $("#button_1").click(Event, function(){
        $("#button_area").hide(3000);
        $(".left_door").stop().animate({right:"65px"},3000);
        $(".right_door").stop().animate({left:"65px"},3000, function(){
            $(".floor_door, .floor").removeClass("on", function(){
                $("#button_area").stop().animate({top:"550px"},3000, function(){
                    $("#door_1, #floor_1").addClass("on", function(){
                        $(".left_door").delay(3000).stop().animate({right:"130px"},3000);
                        $(".right_door").delay(3000).stop().animate({left:"-65px"},3000, function(){
                            $(".left_door").stop().animate({right:"65px"},3000);
                            $(".right_door").stop().animate({left:"65px"},3000);
                        });
                    });
                });
            });
        });
    });
});