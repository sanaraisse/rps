$(document).ready(function () {
        var choose1;
        var choose2;
        // intro
        setTimeout(function() {$(".first").hide();$(".second").show();},3500);
        // intro animation 
        setTimeout(function() {$(".right").addClass("move").animate({letterSpacing: "+=5px"});
                setTimeout(function() {$(".one").addClass("move").animate({letterSpacing: "+=5px"});
                        setTimeout(function () {$(".two").addClass("move").animate({letterSpacing: "+=5px"});
                                setTimeout(function() {$(".three").addClass("move").animate({letterSpacing: "+=5px"});
                                        setTimeout(function () {$(".left").addClass("move").animate({letterSpacing: "+=5px"});
                                        }, 400);
                                }, 400);
                        }, 400);
                }, 400);
        }, 400);
        if ($(".remove").length) {
                setInterval(() => {
                        $(".pre").css('opacity', '0');
                        setTimeout(() => { $(".pre").css('opacity', '1') }, 500);
                }, 1000);
                }; 
        function check() {
                $(".win").css("font-size", "30px");
                $(".check").addClass("checkclicked");
                setTimeout(() => {
                        $(".check").removeClass("checkclicked");
                }, 200);

                if(!($('.fi').val()=="")&&!($('.se').val()=="")){
                        $(".win").show();
                        $(".win").animate({
                                'font-size': '+=20px'
                        }, 2900);
                        $("img").addClass("mystyle")
                        setTimeout(() => {
                                $(".win").hide();
                                $(".win").css("padding", "5px");
                        }, 3000);
                        // check the symbole
                        setTimeout(() => {
                                switch ($(".fi").val()) {
                                        case "Q":
                                                choose1 = "s";
                                                $(".scissorq").removeClass('mystyle');
                                                $(".scissorq").addClass('fade');
                                                $(".scissorq").addClass('fadeOut');
                                                break;
                                        case "S":
                                                choose1 = "p";
                                                $(".papers").removeClass('mystyle');
                                                $(".papers").addClass('fade');
                                                $(".papers").addClass('fadeOut');
                                                break;
                                        case "D":
                                                choose1 = "r";
                                                $(".rockd").removeClass('mystyle');
                                                $(".rockd").addClass('fade');
                                                $(".rockd").addClass('fadeOut');
                                                break;
                                        }
                                switch ($(".se").val()) {
                                        case "3":
                                                choose2 = "s";
                                                $(".scissor3").removeClass('mystyle');
                                                $(".scissor3").addClass('fade');
                                                $(".scissor3").addClass('fadeOut');
                                                break;
                                        case "2":
                                                choose2 = "p";
                                                $(".paper2").removeClass('mystyle');
                                                $(".paper2").addClass('fade');
                                                $(".paper2").addClass('fadeOut');
                                                break;
                                        case "1":
                                                choose2 = "r";
                                                $(".rock1").removeClass('mystyle');
                                                $(".rock1").addClass('fade');
                                                $(".rock1").addClass('fadeOut');
                                                break;
                                }
                                if (choose1 == choose2) {
                                        $(".winner").html("No One");
                                } else{
                                        if (choose1 == "s" && choose2 == "r") {
                                                $(".winner").html($('.sen').html())
                                        } else if ((choose1 == "s") && (choose2 == "p")) {
                                                $(".winner").html($('.fin').html())
                                        } else if (choose1 == "p" && choose2 == "r") {
                                                $(".winner").html($('.fin').html())   
                                        } else if (choose1 == "p" && choose2 == "s") {
                                                $(".winner").html($('.sen').html())   
                                        } else if (choose1 == "r" && choose2 == "p") {
                                                $(".winner").html($('.sen').html())   
                                        } else if (choose1 == "r" && choose2 == "s") {
                                                $(".winner").html($('.fin').html())   
                                        }
                                }
                                // add score
                                if($(".winner").html() == $('.fin').html()) {
                                        sc1 = document.getElementById("score1").innerHTML;
                                        $("#score1").html(++sc1)
                                } if($(".winner").html() == $('.sen').html()) {
                                        sc2 = document.getElementById("score2").innerHTML;
                                        $("#score2").html(++sc2)
                                }
                                
                        }, 2000);
                                setTimeout(() => {
                                $(".winner").show();  
                                }, 3000);
                                setTimeout(() => {
                                        $(".winner").hide();
                                        $("img").removeClass("mystyle");
                                        $("img").addClass('fade');
                                        $("img").addClass('fadeOut');
                                        $(".inp").val("");
                                }, 5000);
                        
                } else {
                        $(".war").show();
                        setTimeout(() => {
                        $(".war").hide();
                        }, 1000);
                        
        }      
        }

        // keyboard events
        $(document).on('keypress', function (e) {
                // press space
                if(e.which == 32) { 
                        $(".second").slideToggle();
                        if(!($('#pl1').val()=="")){
                                $(".fin").html($('#pl1').val());
                        }
                        if(!($('#pl2').val()=="")){
                                $(".sen").html($('#pl2').val());
                        }
                        $(".remove").remove();
                };
                // press Q S D
                if ($(".second").is(":hidden")) {
                if (e.which == 81 || e.which == 83 || e.which == 68){
                        // convert to string
                        $(".fi").val(String.fromCharCode(e.which));
                };
                if (e.which == 49 || e.which == 50 || e.which == 51){
                        $(".se").val(String.fromCharCode(e.which));
                };
                if (e.which == 13) {
                        check()
                }        
        }     
        });
        
        $(".check").click(check); 


        $(".restart").click(function () {
                sc1 = document.getElementById("score1").innerHTML;
                sc1 = 0;
                        $("#score1").html(sc1)
                sc2 = document.getElementById("score2").innerHTML;
                sc2 = 0;
                        $("#score2").html(sc2)
                $(this).addClass("checkclicked")
                setTimeout(() => {
                $(this).removeClass("checkclicked");       
                },200);
        })

});
