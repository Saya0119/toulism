
function autoSlide(){
    interval=setInterval(function(){
        moveRight();
    },2000)
}

autoSlide();

$("#slider div img").hover(function(){
    clearInterval(interval);
},function(){
    autoSlide();
});


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
    // alert("testing");
    $("#slider div").animate({
        left:sliderWidth,
    },"slow",function(){
        // alert("testing");
        $("#slider div img").last().prependTo("#slider div");
        $("#slider div").css("left","0");
    });
}



  // buttons
  $("a.control_prev").click(function(){

    moveLeft();
    // alert("testing");
});

function moveRight(){
    // alert("testing");
    $("#slider div").animate({
        left:-sliderWidth,
    },"slow",function(){
        // alert("testing");
        $("#slider div img").first().appendTo("#slider ul");
        $("#slider div").css("left","0");
    });
}     

    // buttons
$("a.control_next").click(function(){
    moveRight();
    // moveLeft();
    // alert("testing");
});

$(function(){

    $("#open").click (function(){
        // alert("testing");
        $("#myNav").width(300);

    });


    $("#close").click (function(){
        $("#myNav").width(0);

});
});