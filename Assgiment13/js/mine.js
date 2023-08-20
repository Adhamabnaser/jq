//NavBar
function openNav() {
    if($("#myNavBar").width()=="250")
    {
        $("#myNavBar").width("0px")
        $("#myTitleHome").css("margin-left","0px");
    }
    else
    {
        $("#myNavBar").width("250px")
        $("#myTitleHome").css("margin-left","250px");
       
        
    }
   
  }
  
  function closeNav() {
    $("#myNavBar").width("0px")
        $("#myTitleHome").css("margin-left","0px");
  }
//   $("#details p:first").css("display", "block");
  $("#details h3").click(function(){
        $(this).next().slideToggle(500)
        $("#details p").not($(this).next()).slideUp(500)
    }
)

let countDownDate = new Date("Jun 25, 2023 16:37:52").getTime();

   
let myfunc = setInterval(function() {

let now = new Date().getTime();
let timeleft = countDownDate - now;
    

let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    

document.getElementById("days").innerHTML = days + " D "
document.getElementById("hours").innerHTML = hours + " h " 
document.getElementById("mins").innerHTML = minutes < 10 ? `0${minutes} m` : minutes + " m " 
document.getElementById("secs").innerHTML = seconds < 10 ? `0${seconds} s` : seconds +  " s " 
    
}, 1000);










$(function () {
    let limit_num = 100;
    $("textarea").keydown(function () {
        let length = $(this).val().length;
        let character = limit_num - length;
        console.log(character)
        if (character <= 0) {
            $(".char").text("your available character finished");
        } else {
            $(".char").text(character);
        }
    })})
