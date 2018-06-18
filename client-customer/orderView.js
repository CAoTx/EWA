"use strict";

var cart = document.getElementById("shopping_cart");
var price = document.getElementById("preis");
var form = document.getElementById("pizzaOrderList");




function addPzza(pizzaname, pizzapreis) {
	"use strict";

    if(cart.innerHTML.trim().localeCompare("<option>Warenkorb</option>") == 0) {

    	cart.innerHTML = "";

	}
	
	var pizza = document.createElement("option");
	pizza.setAttribute("price", pizzapreis);
	pizza.innerHTML = pizzaname;//getName(pizzanr).value;
	

	var hiddenInput = document.createElement("input");
	hiddenInput.setAttribute("type", "hidden");
	hiddenInput.setAttribute("name", "pizzaOrder[" + cart.children.length / 2 + "]");
	hiddenInput.setAttribute("value", pizzaname);//getName(pizzanr).value);

	cart.appendChild(pizza);
	cart.appendChild(hiddenInput);
	
	_PriceField(pizzapreis);//getPrice(pizzanr).value);

	
	
	if(cart.children.length > 0) {
		
		document.getElementById("orderButton").disabled = false;
		document.getElementById("delete-selected").disabled = false;
	}
}


function removeSelectedPizza() {
	"use strict";
	if(cart.selectedIndex == -1) return;

	var toDelete = [];
		

	for ( var i = 0; i < cart.options.length; i++ ) {
        var opt = cart.options[i];

        if ( opt.selected ) {
			
			toDelete.push(i * 2);
        }
	}
	

	for(var i = toDelete.length - 1; i >= 0; i = i -2) {

		console.log(toDelete[i]);

		/*var preisdiff = -1 * getPrice( nameToIndex( cart.children[ toDelete[ i ] ].value ) ).value;
		cart.removeChild(cart.children[ toDelete[ i ] ]);
		cart.removeChild(cart.children[ toDelete[ i ] ]);
		
		_PriceField(preisdiff);
		*/

		_PriceField(-1 * cart.removeChild(cart.children[ toDelete[ i ] ]));
		cart.removeChild(cart.children[ toDelete[ i ] ]);
	}


	//var selectedIndex = 2 * cart.selectedIndex;

	//var preisdiff = -1 * getPrice( nameToIndex( cart.children[selectedIndex].value ) ).value;
	
	//remove the <option> element
	//cart.removeChild(cart.children[selectedIndex]);

	//remove the hidden input
	//cart.removeChild(cart.children[selectedIndex]);

	//update the price
	//_PriceField(preisdiff);

	if(cart.innerHTML.localeCompare("") == 0) {
		var warenkorb = document.createElement("option");
		warenkorb.innerHTML = "Warenkorb";

		cart.appendChild(warenkorb);

		document.getElementById("orderButton").disabled = true;
		document.getElementById("delete-selected").disabled = true;

	}


}

function removeAllPizzas() {
	"use strict";
	cart.innerHTML = "";
	_PriceField(0);

	var warenkorb = document.createElement("option");
	warenkorb.innerHTML = "Warenkorb";

	cart.appendChild(warenkorb);

	document.getElementById("orderButton").disabled = true;
	document.getElementById("delete-selected").disabled = true;

}

function _PriceField(pricediff) {
	"use strict";

	if(pricediff == 0) {
		price.value = 0;}

	else {
		price.value = parseFloat(price.value) + parseFloat(pricediff);
	}

	price.value = parseFloat(price.value).toFixed(2);

	
}




function createSpeisekarte() {
	"use strict";
	for(var i = 0; i < PizzaNames.length; i++) {
		
		
		var pizzaDiv = document.createElement("div");
		pizzaDiv.setAttribute("class", "menuPizzaItem");

		var a = document.createElement("a");
		a.setAttribute('onclick', "addPzza(" + i + ")");
		a.setAttribute('href', "#");

		a.setAttribute('id', getName(i).value);

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

//createSpeisekarte();

document.getElementById("orderButton").disabled = true;
document.getElementById("delete-selected").disabled = true;