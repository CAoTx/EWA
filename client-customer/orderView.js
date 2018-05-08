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
		img.setAttribute('alt', "Magherita Pizza");
		img.setAttribute('onclick', "addPzza(" + i + ")");
		var tdpizza = document.createElement("span");
		var spanpizza = document.createElement("span");
		spanpizza.setAttribute('class', "name");
		spanpizza.innerHTML = "" + getName(i).value;
		var tdprice = document.createElement("span");
		var spanprice = document.createElement("span");
		
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

		tr.appendChild(tdimg);
		tdimg.appendChild(a);
		a.appendChild(img);
		tr.appendChild(tdpizza);
		tdpizza.appendChild(spanpizza);
		tr.appendChild(tdprice);
		tdprice.appendChild(spanprice);

		document.getElementById("speisekarte").appendChild(tr);

	}
}

createSpeisekarte();