$(document).ready(function(){
    $("#details").click(function(){
        $(".anim").animate({width:"200px"});
    });
    $(".anim").mouseleave(function(){
        $(".anim").animate({width:"100px"});
    });
    $("#app").click(function(){
        $(".add_app").append("<b>Today we will learn append function </b>");
    });
        $("#pre").click(function(){
        $(".add_pre").prepend(" <b>We all Know, </b>");
    });
        $("#afld").click(function(){
        var label=prompt("Enter Label");
        var type=prompt("Enter Type");
        var name=prompt("Enter Name");
        if(label && type && name){
            $(".adding").append("<p>"+label+":"+" <input type='"+type+"' name='"+name+"' >"+"</p>");
        }
    });
    $("#buttonlist").click(function(){
       $("li").each(function(){
        alert($(this).text())  
       }); 
    });

});
  