
var cars = ["Saab", "Volvo", "BMW"];

var cart = document.getElementById("shopping_cart");

function addPzza() {
    document.getElementById("shopping_cart").innerHTML = document.getElementById("shopping_cart").innerHTML + "<option>Hello World</option>";
    console.log("" + cars[1]);
}
