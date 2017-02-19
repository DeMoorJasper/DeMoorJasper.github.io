/* GLOBAL VARIABLES */
var discount = 2;
var toppingprice = 0.30;
var pizzaPrices = {Small:0, Medium:1.5, Large:2.5};
pizzaprice = 4;

var toppings = 0;

// ANIMATIONS
var swapPersonClass = function() {
    var name = $(this).attr("name");
    var arm = $("#arm");

    arm.removeClass();

    switch(name) {
        case "email":
            arm.addClass("pointemail");
            console.log("pointemail");
            break;
        case "amount":
            arm.addClass("pointamount");
            console.log("pointamount");
            break;
        default:
            arm.addClass("pointothers");
            console.log("pointothers");
    }
};

var ShowToppings = function(toon) {
    var top = $("#toppings");
    if (toon) {
        top.fadeIn();
    } else {
        top.fadeOut();
    }
};

// INPUT HANDLERS
var updateCart = function() {
    var me = $(this);

    switch(me.attr("name")) {
        case "name":
            InputName(me);
            break;
        case "amount":
            InputAmount(me);
            break;
        case "toppingssel":
            InputToppings(me);
            break;
        case "deldate":
            InputDateTime(me, true);
            break;
        case "deltime":
            InputDateTime(me, false);
            break;
        case "discount":
            InputDiscount(me);
            break;
        case "toppings":
            if (me.attr("id").search("yes") >= 0) {
                ShowToppings(true);
            } else {
                ShowToppings(false);
            }
            break;
        default:
            // Placeholder, do nothing atm
    }
    updateTotal();
};

var InputName = function(me) {
    // Handle name
    var naam = me.val();
    $("#displayname").text(naam.substring(0, naam.indexOf(" ")));
};

var InputAmount = function(me) {
    // Handle Amount
    var aantal = me.val();

    var plur = $("aside .plural");
    if (aantal == 1) {
        plur.hide();
    } else {
        plur.show();
    }

    var displayamount = $("#displayamount");

    displayamount.data("waarde", aantal);
    displayamount.text(aantal);
};

var InputDiscount = function(me) {
    var discountel = $("#displaydiscount");

    if (me[0].checkValidity() && me.val()) {
        discountel.text(discount + " euro");
        discountel.data("waarde", true);
    } else {
        discountel.text("0 euro");
    }
};

var InputToppings = function(me) {
    var topmsg = $("#toppingmessage");

    toppings = 0;

    topmsg.text("");

    me.parent().children().each(function() {
        //console.log(me);
        if ($(this).is(":checked")) {
            topmsg.text(topmsg.text() + $(this).attr("id") + " ");
            toppings++;
        }
    });

    if (toppings === 0) {
        topmsg.text("No toppings selected");
    }

    $("#toppings").data("waarde", toppings);
};

var submitOrder = function(evt) {
    evt.preventDefault();

    if ($("#yestoppings").is(":checked") && toppings === 0) {
        alert("Please select toppings.");

        $("figure#face").addClass("error");
    } else {
        alert("Thank you for your purchase");

        $("figure#face").removeClass("error");
    }
};

var updateTotal = function() {
    var total = calcPrice();
    if (isNaN(total)) {total = 0}

    $("#currenttotal").text(total);
};

// CALCULATIONS
var calcPrice = function() {
    var amount = parseInt($("#displayamount").data("waarde")) * 4;
    var type = pizzaPrices[$("#type").val()];
    var topCount = parseInt($("#toppings").data("waarde"));
    var Discount = 0;
    if ($("#displaydiscount").data("waarde") === true) {
        Discount = discount;
    }

    return amount * (type + pizzaprice) + topCount * toppingprice - Discount;
};

$(document).ready(function () {
        var inputs = $(".personbody input");
        inputs.on("focus", swapPersonClass);
        inputs.not("#email").on("change", updateCart);
        $("form").on("submit", submitOrder);
    }
);