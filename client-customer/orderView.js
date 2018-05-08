var cart = document.getElementById("shopping_cart");


function addPzza(pizzanr) {

	console.log(document.getElementById("shopping_cart").innerHTML);

    if(cart.innerHTML.localeCompare("<option>Warenkorb</option>") == 0) {

    	cart.innerHTML = "<option>" + getName(pizzanr).value + " " + getPrice(pizzanr).value + "</option>";

    }
    else {
    	cart.innerHTML = document.getElementById("shopping_cart").innerHTML + "<option>" + getName(pizzanr).value + " " + getPrice(pizzanr).value + "</option>";
    }
    
}


function removePizza(pizzanr) {

	document.getElementById("shopping_cart").innerHTML = document.getElementById("shopping_cart").innerHTML.replace("<option>" + getName(pizzanr).value + " " + getPrice(pizzanr).value + "</option>", "") ;
	
	if(document.getElementById("shopping_cart").innerHTML.localeCompare("") == 0) {
		document.getElementById("shopping_cart").innerHTML = "<option>Warenkorb</option>";
	}
}

function createSpeisekarte() {

	document.getElementById("shopping_cart").innerHTML;

}