$(document).ready(function(){
//    높이 설정
    var ht =$(window).height();
    $("#container").css("height",ht);
    $("#open").css("height",ht);
    
//    시작 화면
    $(function(){
        $('#open_2').eraser({
            progressFunction: function(p) {
                $('#progress').html(Math.round(p*100));
                if ($('#progress').text() >= 1) {
                    $("#open").fadeOut(6000);
                }
            }
        });
    });
//    입장
    $("#in").click(Event, function(){
        $("#door_1, #floor_1").addClass("on");
        $("#in").fadeOut(3000);
        $("#container > img, #background").css("opacity","0.6");
    });
    
//    엘리베이터
    $("#button_area").hide();
    
    $(".elevator_sw").click(Event, function(){
        $(".left_door").animate({right:"130px"},3000);
        $(".right_door").animate({left:"-65px"},3000);
        $("#button_area").delay(2000).show(1000);
    });
    
    $("#button_3").click(Event, function(){
        $("#button_area").hide(1000);
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
        $("#button_area").hide(1000);
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
        $("#button_area").hide(1000);
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