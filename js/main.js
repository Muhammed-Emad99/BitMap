$(document).ready(function(){
    $(".cog").click(function(){
        $(".Fixed_M").animate({
            "left" : 0,
        },1000); 
    });
    $(document).keyup(function(e){
        if(e.keyCode == 39){
            $(".Fixed_M").animate({
                "left" : 0,
            },1000);
        }
        else if(e.keyCode == 37){
            $(".Fixed_M").animate({
                "left" :-300,
            },1000);
        }
    });
    $(".close").click(function(){
        $(".Fixed_M").animate({
            "left" : -300,
        },1000);
    });
    $(".container .fixed_m .accordion .accordion-item .accordion-collapse .accordion-body .color_1").click(function(){
        $(".body").css(
            "input",input.val); ////////////////////input color//////
    });
    $(".navbar .container-fluid .collapse .navbar-nav .nav_item_1 a").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop : $("#"+$(this).data('scroll')).offset().top
        },1000); 
    });
    $(".navbar .container-fluid .collapse .navbar-nav .nav_item_1 a").click(function(){
        $(this).addClass("active");
        $(this).parent(".nav_item_1").siblings().find("a").removeClass("active");
    });
   
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".btn_top").slideDown(200);
        }
        else{
            $(".btn_top").slideUp(200);
        }
        $(".block").each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var id = $(this).attr("id");
                $(".navbar .container-fluid .collapse ul li a").removeClass("active");
                $(".navbar .container-fluid .collapse ul li a[data-scroll='"+ id +"']").addClass("active");
            }
        })
    });
    $(".btn_top").click(function(){
        $("html,body").animate({
            scrollTop :0,
        },1000)
    })
});