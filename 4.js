// 1

$(document).ready(function(){
    //1
    $("button").click(function() {
        $("p").last().after("<div>A new line.</div>");
        $("div").click(function() {
        if ($(this).css("color") == "rgb(0, 0, 0)"){
           $(this).css("color", "red");
        } else if ($(this).css("color")== "rgb(255, 0, 0)"){
           $(this).fadeOut(1000);
           $(this).css("color", "black");
           $(this).fadeIn(0);
       }
     });
    });

    $("p").click(function() {
       if ($(this).css("color") == "rgb(0, 0, 0)"){
           $(this).css("color", "red");
       } else if ($(this).css("color")== "rgb(255, 0, 0)"){
           $(this).fadeOut(1000);
           $(this).css("color", "black");
           $(this).fadeIn(0);
       }
     });  
});

//3 vardus islistinti paklikinus atsiranda kortele su animacija
var duomenys = $.get( "https://reqres.in/api/users?per_page=12", function() {
  
})

$.ajax({
  url: "https://reqres.in/api/users?per_page=12",
  type: "GET",
  dataType: "json",
  async: true,
  data: "data",
  success: function(data) {
        var hash = data.data;
        for(var i = 0; i < hash.length; i++){
            $("ul").append("<li>"+hash[i].first_name+" "+hash[i].last_name+"<br>"+"</li>");
        }
        $("li").click(function() {
            $(this).slideUp();
            
            $(this).slideDown();
            for(var i = 0; i < hash.length; i++){
            $("ul").append("<li>"+hash[i].first_name+" "+hash[i].last_name+"<br>"+'<img src=\"'+hash[i].avatar+'\"'+"</li>");
        }


        });
}
});



    



