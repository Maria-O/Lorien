/**
 * Created by Mariia_Obizna on 4/20/2015.
 */
var background = $('#background'),
    foreground = $("#foreground");

$(document).ready(function(){
    var width  = window.screen.availWidth +60,
        heigth = window.screen.availHeight +60;
    background.width(window.screen.availWidth);
    background.height(window.screen.availHeight);
    background.css('background-size', width + "px " + heigth  +"px" );
    setTimeout(function(){
        // Hide the address bar!
        window.scrollTo(0, 1);
    }, 0);
});

window.addEventListener('deviceorientation', function(eventData) {
    var yTilt = Math.round((-eventData.beta + 90) * (10/180) -40),
        xTilt = Math.round(-eventData.gamma * (40/180)-20),
        newColor = 255 + xTilt*10,
        backgroundPositionValue = yTilt + 'px ' + xTilt + "px";
    if (xTilt > 0) {
        xTilt = -xTilt;
    } else if (xTilt < -40) {
        xTilt = -(xTilt + 80);
    }
    foreground.css('background', "rgba(" + newColor + "," + (newColor+90)+ ",255, 0.6)" );
    foreground.height(100+xTilt);
    background.css("background-position",  backgroundPositionValue);
}, false);