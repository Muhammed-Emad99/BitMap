$(document).ready(function(){
    $(".cog").click(function(){
        $(".fixed_m").animate({
            "left" : 0,
        },1000); 
    });
    $(".close").click(function(){
        $(".fixed_m").animate({
            "left" : -300,
        },1000);
    });
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
                "input",input.val); 
        });
        $(".container form .Pass_word .eye_slash i").click(function(){
            if($(this).attr("class")=="fa fa-eye-slash"){
                $(this).attr("class","fa fa-eye");
                $(".password").attr("type","text");
            }
            else{
                $(this).attr("class","fa fa-eye-slash");
                $(".password").attr("type","password");
            }
        });
          //===============================================================
          //===================start username validation===================
          //===============================================================
    
        $(".username").on("input",function(){
            if($(this).val() == ""){
                $(".Error_username").slideDown(600);
            }
            else{
                $(".Error_username").slideUp(600);
            };
        });   
        $(".username").on("input",function(){
            if($(this).val().length < 4){
                $(".Error_length_username").slideDown(600);
            }
            else{
                $(".Error_length_username").slideUp(600);
            };
        }); 
    
           //===============================================================
          //=================== end username validation=====================
          //================================================================
    
          $(".password").on("input",function(){
            if($(this).val() == ""){
                $(".Error_password").slideDown(600);
            }
            else{
                $(".Error_password").slideUp(600);
            };
        });
        $(".password").on("input",function(){
            if($(this).val().length < 4){
                $(".Error_length_password").slideDown(600);
            }
            else{
                $(".Error_length_password").slideUp(600);
            };
        });
    
          //===============================================================
          //===================start password validation===================
          //===============================================================
    
           //===============================================================
          //=================== end password validation=====================
          //================================================================
           $(".All_inp").on("input",function(){
               if($(".username").val() !== "" && $(".password").val() !== ""){
                   $(".log").removeAttr("disabled");
               }
               else{
                $(".log").prop("disabled",true);
               }
           });
    });
});