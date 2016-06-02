var Time2 = 8;

$( document ).ready(function() {
  var h1Values = $( "#ScrollTXT h1" ).text();
  var pValues = $( "#ScrollTXT p" ).text();

  var h1Processed = '';
  var Time = 250;
  var Counter = 0;

  $("#ScrollTXT h1").text(" ");
  $("#ScrollTXT p").text(" ");

  for(var x = 0, c=''; c = h1Values.charAt(x); x++){
    var Timey = Counter * Time;
    h1Processed += c;

    if (c != " ") {
      ZetLetterH(h1Processed, Timey);
      ScrollLetterH(h1Processed, Timey - Time);
    }

    //alert('c');
    Counter += 1;
  }

  h1Processed = '';

  for(var x = 0, c=''; c = pValues.charAt(x); x++){
    var Timey = Counter * Time;
    h1Processed += c;

    if (c != " ") {
      ZetLetterP(h1Processed, Timey);
      ScrollLetterP(h1Processed, Timey - Time);
    }

    //alert('c');
    Counter += 1;
  }

  // alert(h1Values);
  // alert(pValues);
});

function ZetLetterH(text, Timey) {
  setTimeout(function() {
    $("#ScrollTXT h1").text(text);
  }, Timey);
}

function ZetLetterP(text, Timey) {
  setTimeout(function() {
      $("#ScrollTXT p").text(text);
  }, Timey);
}

function ScrollLetterP(text, times) {
  var allValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ScrollProcess = "";
  var subText = text.substring(0, (text.length-1));
  var Countit = 0;

  for(var x = 0, c=''; c = allValues.charAt(x); x++){
    var Timeyy = Countit * Time2 + times;

    ScrollLetterP2(text + c, Timeyy);

    Countit += 1;
  }
}

function ScrollLetterP2(text, times) {
  setTimeout(function() {
    $("#ScrollTXT p").text(text);
  }, times);
}

function ScrollLetterH(text, times) {
  var allValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ScrollProcess = "";
  var subText = text.substring(0, (text.length-1));
  var Countit = 0;

  for(var x = 0, c=''; c = allValues.charAt(x); x++){
    var Timeyy = Countit * Time2 + times;

    ScrollLetterH2(text + c, Timeyy);

    Countit += 1;
  }
}

function ScrollLetterH2(text, times) {
  setTimeout(function() {
    $("#ScrollTXT h1").text(text);
  }, times);
}
