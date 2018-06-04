' use strict '

var cart = document.getElementById("shopping_cart");
var price = document.getElementById("preis");
var form = document.getElementById("pizzaOrderList");




function addPzza(pizzanr) {


    if(cart.innerHTML.trim().localeCompare("<option>Warenkorb</option>") == 0) {

    	cart.innerHTML = "";

	}
	
	var pizza = document.createElement("option");
	pizza.innerHTML = getName(pizzanr).value;
	

	var hiddenInput = document.createElement("input");
	hiddenInput.setAttribute("type", "hidden");
	hiddenInput.setAttribute("name", "pizzaOrder[" + cart.children.length / 2 + "]");
	hiddenInput.setAttribute("value", getName(pizzanr).value);

	cart.appendChild(pizza);
	cart.appendChild(hiddenInput);
	
	_PriceField(getPrice(pizzanr).value);

	
	
	if(cart.children.length > 0) {
		
		document.getElementById("orderButton").disabled = false;
		document.getElementById("delete-selected").disabled = false;
	}
}


function removeSelectedPizza() {

	if(cart.selectedIndex == -1) return;

	var selectedIndex = 2 * cart.selectedIndex;

	var preisdiff = -1 * getPrice( nameToIndex( cart.children[selectedIndex].value ) ).value;
	
	//remove the <option> element
	cart.removeChild(cart.children[selectedIndex]);

	//remove the hidden input
	cart.removeChild(cart.children[selectedIndex]);

	console.log(preisdiff);
	_PriceField(preisdiff);

	if(cart.innerHTML.localeCompare("") == 0) {
		var warenkorb = document.createElement("option");
		warenkorb.innerHTML = "Warenkorb";

		cart.appendChild(warenkorb);

		document.getElementById("orderButton").disabled = true;
		document.getElementById("delete-selected").disabled = true;

	}


}

function removeAllPizzas() {

	cart.innerHTML = "";
	_PriceField(0);

	var warenkorb = document.createElement("option");
	warenkorb.innerHTML = "Warenkorb";

	cart.appendChild(warenkorb);

	document.getElementById("orderButton").disabled = true;
	document.getElementById("delete-selected").disabled = true;

}

function _PriceField(pricediff) {


	if(pricediff == 0) {
		price.value = 0;}

	else {
		price.value = parseFloat(price.value) + parseFloat(pricediff);
	}

	price.value = parseFloat(price.value).toFixed(2);

	
}




function createSpeisekarte() {

	for(var i = 0; i < PizzaNames.length; i++) {
		
		var e_id = "pizza" + i;

		var pizzaDiv = document.createElement("div");
		pizzaDiv.setAttribute("class", "menuPizzaItem");

		var a = document.createElement("a");
		a.setAttribute('onclick', "addPzza(" + i + ")");
		a.setAttribute('href', "#");
		a.setAttribute('id', getName(i));

		var img = document.createElement("img");
		img.setAttribute('src', "../assets/pizza.png");
		img.setAttribute('width', "80");
		img.setAttribute('height', "80");
		img.setAttribute('alt', "Pizzaimg");

		
		var spanpizza = document.createElement("span");
		spanpizza.setAttribute('class', "name");
		spanpizza.innerHTML = "" + getName(i).value;
		

		var spanprice = document.createElement("span");
		spanprice.setAttribute('class', 'price');

		var pricestr = "" + getPrice(i).value;
		
		if(pricestr.includes(".")) {
			//"6.9"
			if(pricestr.lastIndexOf(".") == pricestr.length - 2) pricestr += "0";
		}
		else {
			pricestr += ".00";
		}
		pricestr += " €";

		spanprice.innerHTML = pricestr;


		pizzaDiv.appendChild(a);
		a.appendChild(img);
		a.appendChild(spanpizza);
		a.appendChild(spanprice);

		document.getElementById("speisekarte").appendChild(pizzaDiv);

	}
}

createSpeisekarte();

document.getElementById("orderButton").disabled = true;
document.getElementById("delete-selected").disabled = true;