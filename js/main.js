$(document).ready(function(){
  
    $(".navbar .container-fluid .collapse .navbar-nav .nav-item a").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop : $("#"+$(this).data('scroll')).offset().top
        },1000); 
    });
    $(".navbar .container-fluid .collapse .navbar-nav .nav-item a").click(function(){
        $(this).addClass("active");
        $(this).parent(".nav_item").siblings().find("a").removeClass("active");
    });
});