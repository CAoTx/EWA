var cart = document.getElementById("shopping_cart");


function addPzza(pizzanr) {

	console.log(cart.innerHTML);

    if(cart.innerHTML.localeCompare("<option>Warenkorb</option>") == 0) {

    	cart.innerHTML = "<option>" + getName(pizzanr).value + " " + getPrice(pizzanr).value + "</option>";

    }
    else {
    	cart.innerHTML = cart.innerHTML + "<option>" + getName(pizzanr).value + " " + getPrice(pizzanr).value + "</option>";
    }
    
}


function removePizza(pizzanr) {

	cart.innerHTML = cart.innerHTML.replace("<option>" + getName(pizzanr).value + " " + getPrice(pizzanr).value + "</option>", "") ;
	
	if(cart.innerHTML.localeCompare("") == 0) {
		cart.innerHTML = "<option>Warenkorb</option>";
	}
}

function createSpeisekarte() {

	cart.innerHTML;

}