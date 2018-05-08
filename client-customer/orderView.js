
var cars = ["Saab", "Volvo", "BMW"];


function addPzza(pizzanr) {

	
    if(document.getElementById("shopping_cart").innerHTML.localeCompare("<option>Warenkorb</option>") == 0) {

    	document.getElementById("shopping_cart").innerHTML = "<option>" + getName(pizzanr).value + " " + getPrice(pizzanr).value + "</option>";

    }
    else {
    	document.getElementById("shopping_cart").innerHTML = document.getElementById("shopping_cart").innerHTML + "<option>" + getName(pizzanr).value + " " + getPrice(pizzanr).value + "</option>";
    }
    
    console.log("" + cars[1]);
}
