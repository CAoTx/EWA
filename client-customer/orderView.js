var cart = document.getElementById("shopping_cart");
var price = document.getElementById("preis");
var form = document.getElementById("pizzaOrderList");


var pizzaOrders = 0;


function addPzza(pizzanr) {


	//cart.removeChild(document.getElementById());

    if(cart.innerHTML.trim().localeCompare("<option>Warenkorb</option>") == 0) {

    	cart.innerHTML = "";//"<option>" + getName(pizzanr).value + " " + getPrice(pizzanr).value + "</option>";

	}
	
	var pizza = document.createElement("option");
	//pizza.setAttribute("");



	pizza.innerHTML = getName(pizzanr).value;

	

	cart.appendChild(pizza);

	
	_PriceField(getPrice(pizzanr).value);

	var hiddenInput = document.createElement("input");
	hiddenInput.setAttribute("type", "hidden");
	hiddenInput.setAttribute("name", "pizzaOrder\[" + pizzaOrders + "\]");
	pizzaOrders = pizzaOrders + 1;
	form.appendChild(hiddenInput);
    
}


function removeSelectedPizza() {

	if(cart.selectedIndex == -1) return;

	var selectedIndex = cart.selectedIndex;


	var preisdiff = -1 * getPrice( nameToIndex( cart.children[selectedIndex].value ) ).value;

	cart.removeChild(cart.children[selectedIndex]);

	_PriceField(preisdiff);

	if(cart.innerHTML.localeCompare("") == 0) {
		var warenkorb = document.createElement("option");
		warenkorb.innerHTML = "Warenkorb";

		cart.appendChild(warenkorb);

	}


}

function removeAllPizzas() {

	cart.innerHTML = "";
	_PriceField(0);

	//var warenkorb = document.createElement("option");
	cart.setAttribute("placeholder", "Warenkorb");
	//warenkorb.innerHTML = "Warenkorb";

	//cart.appendChild(warenkorb);

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

		var tr = document.createElement("div");
		var tdimg = document.createElement("span");
		var a = document.createElement("a");

		a.setAttribute('href', "#");
		a.setAttribute('id', getName(i));
		var img = document.createElement("img");
		img.setAttribute('src', "../assets/pizza.png");
		img.setAttribute('width', "130");
		img.setAttribute('height', "130");
		img.setAttribute('alt', "Pizzaimg");
		img.setAttribute('onclick', "addPzza(" + i + ")");
		var tdpizza = document.createElement("span");
		var spanpizza = document.createElement("span");
		spanpizza.setAttribute('class', "name");
		spanpizza.innerHTML = "" + getName(i).value;
		var tdprice = document.createElement("span");
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

		//tr.appendChild(tdimg);
		tr.appendChild(a);
		a.appendChild(img);
		a.appendChild(spanpizza);
		a.appendChild(spanprice);
		tr.appendChild(tdpizza);
		//tdpizza.appendChild(spanpizza);
		tr.appendChild(tdprice);
		//tdprice.appendChild(spanprice);

		document.getElementById("speisekarte").appendChild(tr);

	}
}

createSpeisekarte();