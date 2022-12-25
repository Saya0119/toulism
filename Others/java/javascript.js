
$(function(){

    $(".btn-hidden").click(function(){
        $("#first").css("display","none");
        $("#second").css("display","none");
        $("#third").css("display","none");


    });

    $(".btn-japan").click(function(){
        // alert("test");
        $("#first").css("display","block");
        $("#second").css("display","none");
        $("#third").css("display","none");
    });

    $(".btn-usa").click(function(){
        $("#first").css("display","none");
        $("#second").css("display","block");
        $("#third").css("display","none");
    });

    $(".btn-thai").click(function(){
        $("#first").css("display","none");
        $("#second").css("display","none");
        $("#third").css("display","block");
    });

    $('.btn-hidden').click();




    
});    