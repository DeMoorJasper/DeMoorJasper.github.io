/**
 * Created by jasper on 15/01/17.
 */

var arrToppings = ["cheddar", "cucumber", "emmentaler", "salad", "tomato", "beef"];
arrToppings.sort();

var handleNext = function() {
    var field = $(this).closest("fieldset");
    field.fadeOut();
    field.next("fieldset").fadeIn();
};

var addButtons = function() {
    var buttons = "";
    for (i = 0; i < arrToppings.length; i++) {
        buttons += '<a href="#" class="' + arrToppings[i] + ' seltop">' + arrToppings[i] + '</a>';
    }
    $(".buttons").html(buttons);
};

var addTopping = function() {
    /* <img src="images/bottom-bun.svg" alt="Bottom bun" title="Bottom bun"/> */
    var topping = $(this).text();
    var tops = $(".toppings");
    var currtoppings = tops.html();
    currtoppings += '<img src="images/' + topping + '.svg" alt="' + topping + '" title="' + topping + '"/>';
    tops.html(currtoppings);
};

$(document).ready(function() {
    addButtons();
    $(".next").on("click", handleNext);
    $(".seltop").on("click", addTopping);
});