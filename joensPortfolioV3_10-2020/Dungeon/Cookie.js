 function CreateCookie(){
setCookie("Cookie", 1, 365);

setCookie("Level", 0, 365);
setCookie("Coin", 0, 365);

setCookie("Size", 0, 365);
setCookie("Diff", 0, 365);
setCookie("Mode", 0, 365);
}

function doesCookieExist(name) {
    return document.cookie.indexOf(name+'=');
}

function setCookie(cname, cvalue, exdays) {
   var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
     var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
      }
     if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
     }
   }
   return "";
} 

function checkCookie(Z){
  var A = getCookie(Z)
return parseInt(A)
}

function UpdateStats(){
var slider = document.getElementById("Size").value;
var slider2 = document.getElementById("Diff").value;
var slider3 = document.getElementById("Mode").value;

setCookie("Size", parseInt(slider), 365);
setCookie("Diff", parseInt(slider2), 365);
setCookie("Mode", parseInt(slider3), 365);
}


function UpdateCookies(Z){
A = checkCookie("Level")
B = checkCookie("Coin")
var slider = document.getElementById("Size").value;
var slider2 = document.getElementById("Diff").value;
var slider3 = document.getElementById("Mode").value;

setCookie("Level", A+1, 365);
setCookie("Coin", B+Z, 365);

setCookie("Size", parseInt(slider), 365);
setCookie("Diff", parseInt(slider2), 365);
setCookie("Mode", parseInt(slider3), 365);
}

function ShowStats(){
if(doesCookieExist("Cookie") == -1){CreateCookie()}

document.documentElement.style.overflow = 'hidden';
document.getElementById("Coin").innerHTML = "Coins: " + checkCookie("Coin");
document.getElementById("Level").innerHTML = "Levels: " + checkCookie("Level");
}