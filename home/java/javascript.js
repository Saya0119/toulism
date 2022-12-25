
$(function(){

    $("h2").click(function(){
        $(".accordion").slideDown();
    });

    $(".squirel").click(function(){
    
        goLeft();

    });

    function goLeft(){
        $(".squirel").animate({
            left:"600px",
        },"slow",function(){
            // alert("testing call back function");
            goDown();
        });
    }

    function goDown(){
        $(".squirel").animate({
            top:"500px",
        },"slow",function(){
            // alert("Testing goup");
            goSlant();
        });
    }

    function goSlant(){
        $(".squirel").animate({
            left:"300px",
            top:"200px",
        },"slow",function(){
        
            goBack()
        });
    }

    function goBack(){
        $(".squirel").animate({
            left:"0",
        },"slow",function(){
        
            goLeft();
        });
    }









    var sliderWidth=$("#slider div img").width();
    console.log(sliderWidth);
    var sliderHeight=$("#slider div img").height();
    console.log(sliderHeight);

    var sliderCount=$("#slider div img").length;
    console.log(sliderCount);

    var sliderUIWidth=sliderWidth*sliderCount;
    console.log(sliderUIWidth);

    $("#slider").css({
        width:sliderWidth,
        height:sliderHeight,
    });

    $("#slider div").css({
        width:sliderUIWidth,
        height:sliderHeight,
        marginLeft:-sliderWidth,
    });

    $("#slider div img").last().prependTo("#slider div");

    function moveLeft(){
   
        $("#slider div").animate({
            left:sliderWidth,
        },"slow",function(){
        
            $("#slider div img").last().prependTo("#slider div");
            $("#slider div").css("left","0");
        });
    }



  // buttons
      $("a.control_prev").click(function(){

        moveLeft();
    
     });

    function moveRight(){
    
        $("#slider div").animate({
            left:-sliderWidth,
        },"slow",function(){
        
            $("#slider div img").first().appendTo("#slider div");
            $("#slider div").css("left","0");
        });
    }     

    
    $("a.control_next").click(function(){
        moveRight();
    
    });
});    