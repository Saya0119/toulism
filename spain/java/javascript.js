
$(function(){

    // alert("testing");

  $(".btn-1day").click(function(){
    $("#first-div").css("display","block");
    $("#second-div").css("display","none");
    $("#third-div").css("display","none");
    $("#forth-div").css("display","none");
  });

 

    $(".btn-2nd").click(function(){
      $("#second-div").css("display","block");
      $("#first-div").css("display","none");
      $("#third-div").css("display","none");
      $("#forth-div").css("display","none");
    });



    $(".btn-3rd").click(function(){
      $("#third-div").css("display","block");
      $("#second-div").css("display","none");
      $("#first-div").css("display","none");
      $("#forth-div").css("display","none");
    });

  

    $(".btn-4th").click(function(){
      $("#forth-div").css("display","block");
      $("#second-div").css("display","none");
      $("#third-div").css("display","none");
      $("#first-div").css("display","none");
    });

   
        
});