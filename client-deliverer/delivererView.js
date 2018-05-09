"use strict "

window.addEventListener('load', function () {
    createContent();
});

function _getPrice(idx) {
    console.log("Id = " + getPrice(idx).key);
    console.log("Price = " + getName(idx).value);
}

function _btnOne() {
    console.log()
}

function createOrders() {

    var data = Orders;

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }

}

function setStatus(idx, stat) {
    if (idx > 0) {
        Orders[idx].status = stat;
    }

}



function createContent() {

    alreadyPrinted = [];

    for (var x = 0; x < Orders.length; x++) {

        if (Orders[x].status > 2 && Orders[x].status < 5 && alreadyPrinted[alreadyPrinted.length - 1] != Orders[x].ord_id) {
            alreadyPrinted.push(Orders[x].ord_id);
            var price = 0;

            var art = document.createElement("article");

            var p1 = document.createElement("p");
            p1.id = "p1" + x;
            p1.innerHTML = p1.innerHTML + Orders[x].addr;


            var p2 = document.createElement("p");
            p2.id = "p2" + x;
            p2.innerHTML = p2.innerHTML + getName(Orders[x].pizza).value;
            price = price + getPrice(Orders[x].pizza).value;


            //To Pack multiple Pizzas to One Card
            safearr = [];

            for (var i = 0; i < Orders.length; i++) {
                if (Orders[i].ord_id == Orders[x].ord_id && i != x && i > x) {
                    var newp = document.createElement("p");
                    newp.id = "p2." + i;
                    newp.innerHTML = newp.innerHTML + getName(Orders[i].pizza).value;
                    safearr.push(newp);
                    price += getPrice(Orders[x].pizza).value;
                }
            }
            price = Math.round(price);


            var p3 = document.createElement("p");
            p3.id = "p3" + x;
            p3.innerHTML = p3.innerHTML + price;

            var lab1 = document.createElement("label");
            lab1.setAttribute("class", "radioLabel");
            var lab2 = lab1;
            var lab3 = lab2;

            var sp1 = document.createElement("span");
            sp1.setAttribute("class", "radioSpan");
            var sp2 = sp1;
            var sp3 = sp2;
            sp1.innerHTML = "Ready";
            sp2.innerHTML = "Flying";
            sp3.innerHTML = "Finish";

            var in1 = document.createElement("input");
            in1.setAttribute("type", "radio");
            in1.setAttribute("value", "0");
            in1.setAttribute("onclick", "setStatus(" + x + ", 3)");
            in1.setAttribute("name", "in" + x);
            in1.setAttribute("checked", "checked");

            var in2 = document.createElement("input");
            in2.setAttribute("type", "radio");
            in2.setAttribute("value", "1");
            in2.setAttribute("name", "in" + x);
            in2.setAttribute("onclick", "setStatus(" + x + ", 4)");

            var in3 = document.createElement("input");
            in3.setAttribute("type", "radio");
            in3.setAttribute("value", "2");
            in3.setAttribute("onclick", "setStatus(" + x + ", 5)");
            in3.setAttribute("name", "in" + x);
            in3.innerHTML = "OUT";

            art.appendChild(p1);
            art.appendChild(p2);

            if (safearr.length != null) {
                for (var j = 0; safearr[j] != null; j++) {
                    art.appendChild(safearr[j]);
                }
            }

            art.appendChild(p3);
            art.appendChild(in1);
            art.appendChild(in2);
            art.appendChild(in3);

            document.getElementById("mainContent").appendChild(art);

        }
    }

}