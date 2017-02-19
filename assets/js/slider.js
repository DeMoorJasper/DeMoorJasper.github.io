/* JASPER DE MOOR */

var time = 2500;
var curr = 0;

var nextText = function()  {
    $Texts = $(".txtslider").children();
    //console.log($Texts);

    $($Texts[curr]).hide();
    console.log(curr);

    if ($Texts.length - 1 > curr) {
        curr++;
    } else {
        curr = 0;
    }

    $($Texts[curr]).fadeIn();


    setTimeout(nextText, time);
};

$(document).ready(function() {
    setTimeout(nextText, time);
});