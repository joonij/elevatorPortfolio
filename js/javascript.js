$(document).ready(function(){
//    시작 화면
    $(".entrance").hide();
    $("#open, .wrap").css("display","none");
    $("#open").fadeIn(1000, function(){
        $(".wrap").fadeIn(500);
    });
    
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("msie") > -1 || agent.indexOf("trident") > -1) {
        $('#open img').click(Event, function(){
            $("#open").fadeOut(2500, function(){
                $(".entrance").fadeIn(2000);
            });
        });
    } else {
        $(function(){
            $('#open img').eraser({
                progressFunction: function(p) {
                    $('#progress').html(Math.round(p*100));
                    if ($('#progress').text() >= 1) {
                        $("#open").fadeOut(2500, function(){
                            $(".entrance").fadeIn(2000);
                        });
                    }
                }
            });
        });
    }
    
//    입장
    $(".entrance .click_area").click(Event, function(){
        $("#floor_door_1, #floor_1").addClass("on");
        $(".entrance").fadeOut(2000);
        $(".wrap > img, #background").css("opacity","0.6");
    });
    
//    엘리베이터
    $("#button_area").hide();
    
    $(".elevator_sw").click(Event, function(){
        $(".left_door").stop().animate({right:"130px"},2000);
        $(".right_door").stop().animate({left:"-65px"},2000);
        $("#button_3").css("background", "url(img/button_off_3.png) no-repeat");
        $("#button_2").css("background", "url(img/button_off_2.png) no-repeat");
        $("#button_1").css("background", "url(img/button_off_1.png) no-repeat");
        $("#button_area").delay(2000).show(1000);
        $(".floor > i").delay(2000).fadeOut(1000);
    });
    
   $("#button_3").click(Event, function(){
       $("#button_3").css("background", "url(img/button_on_3.png) no-repeat");
       $("#button_area").hide(1000);
       $(".left_door").stop().animate({right:"65px"},2000);
       $(".right_door").stop().animate({left:"65px"},2000, function(){
           $(".floor_door, .floor").removeClass("on", function(){
               $("#button_area").stop().animate({top:"50px"},1500, function(){
                   $("#floor_door_3, #floor_3").addClass("on", function(){
                       $(".left_door").delay(3000).stop().animate({right:"130px"},2000);
                       $(".right_door").delay(3000).stop().animate({left:"-65px"},2000, function(){
                           $(".left_door").stop().animate({right:"65px"},2000);
                           $(".right_door").stop().animate({left:"65px"},2000);
                           $(".floor i").delay(2000).fadeIn(1000);
                       });
                   });
               });
           });
       });
   });
    $("#button_2").click(Event, function(){
        $("#button_2").css("background", "url(img/button_on_2.png) no-repeat");
        $("#button_area").hide(1000);
        $(".left_door").stop().animate({right:"65px"},2000);
        $(".right_door").stop().animate({left:"65px"},2000, function(){
            $(".floor_door, .floor").removeClass("on", function(){
                $("#button_area").stop().animate({top:"300px"},1500, function(){
                    $("#floor_door_2, #floor_2").addClass("on", function(){
                        $(".left_door").delay(3000).stop().animate({right:"130px"},2000);
                        $(".right_door").delay(3000).stop().animate({left:"-65px"},2000, function(){
                            $(".left_door").stop().animate({right:"65px"},2000);
                            $(".right_door").stop().animate({left:"65px"},2000);
                            $(".floor i").delay(2000).fadeIn(1000);
                        });
                    });
                });
            });
        });
    });
    $("#button_1").click(Event, function(){
        $("#button_1").css("background", "url(img/button_on_1.png) no-repeat");
        $("#button_area").hide(1000);
        $(".left_door").stop().animate({right:"65px"},2000);
        $(".right_door").stop().animate({left:"65px"},2000, function(){
            $(".floor_door, .floor").removeClass("on", function(){
                $("#button_area").stop().animate({top:"550px"},1500, function(){
                    $("#floor_door_1, #floor_1").addClass("on", function(){
                        $(".left_door").delay(3000).stop().animate({right:"130px"},2000);
                        $(".right_door").delay(3000).stop().animate({left:"-65px"},2000, function(){
                            $(".left_door").stop().animate({right:"65px"},2000);
                            $(".right_door").stop().animate({left:"65px"},2000);
                            $(".floor i").delay(2000).fadeIn(1000);
                        });
                    });
                });
            });
        });
    });
});