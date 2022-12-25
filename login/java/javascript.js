
$(function(){

   
$(".firstname").click(function(){
    
 $(".name1").css("backgroundColor","lightBlue");
 $(".country").css("backgroundColor","transparent");
 $(".name2").css("backgroundColor","transparent");

});

$(".lastname").click(function(){
 
    $(".name2").css("backgroundColor","lightPink");
    $(".country").css("backgroundColor","transparent");
    $(".name1").css("backgroundColor","transparent");
   
   });

$("#NationalSelect").click(function(){
 
    $(".name2").css("backgroundColor","transparent");
    $(".country").css("backgroundColor","lightyellow");
    $(".name1").css("backgroundColor","transpartransparentent");
   
   });   

$("#AddPhone").click(function(){
    
   

        var item=$("#inputItem").val();
        console.log(item);
            
          
        if(item!=""){
            $("#getNumber").append("<li>"+item+"</li>");
            $("#inputItem").val("");

        }else{
            alert("Please input something");
        }
            

        
           
        
    });


    



    
});    