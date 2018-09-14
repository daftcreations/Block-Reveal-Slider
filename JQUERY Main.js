$(document).ready(function(){
    $("#c2").click(function(){
        $("#menu ul li:nth-child(1)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(3)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(4)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(2)").css('box-shadow','0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(255,45,94,1)'); 
        
        setTimeout(function(){
            showCar(2);
        },700);
        
        slideMove();
    }); 
    
    $("#c3").click(function(){
        $("#menu ul li:nth-child(1)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(2)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(4)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(3)").css('box-shadow','0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(255,45,94,1)'); 
        
        setTimeout(function(){
            showCar(3);
        },700);
        
        slideMove();
    });
    
    $("#c4").click(function(){
        $("#menu ul li:nth-child(1)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(2)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(3)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(4)").css('box-shadow','0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(255,45,94,1)'); 
        
        setTimeout(function(){
            showCar(4);
        },700);
        
        slideMove();
    });
    
    $("#c1").click(function(){
        $("#menu ul li:nth-child(2)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(3)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(4)").css('box-shadow','none'); 
        $("#menu ul li:nth-child(1)").css('box-shadow','0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(255,45,94,1)'); 
        
        setTimeout(function(){
            showCar(1);
        },700);
        
        slideMove();
    });
    
    
    function showCar($n)
    {
        $("#cars img").attr('src','CAR '+$n+'.png');
    }
    
    function slideMove()
    {
        $("#blackLayer").animate({left:'-150%'},1300,'swing',function(){
            $("#blackLayer").css('left','100%'); 
        });
        
        $("#redLayer").animate({left:'-170%'},1400,'swing',function(){
            $("#redLayer").css('left','100%'); 
        });
    }
});








