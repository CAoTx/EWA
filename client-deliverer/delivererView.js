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
    if(idx > 0) {
        Orders[idx].status = stat;
    }
    
}



function createContent() {

    for(var x = 0; x < Orders.length; x++) {

        if(Orders[x].status > 2 && Orders[x].status < 5) {

            var art = document.createElement("article");
            art.setAttribute("style", "display: inline-block; width: 300px; border-style: solid;");

            var p1 = document.createElement("p");
            p1.id = "p1"+x;
            p1.innerHTML = p1.innerHTML + Orders[x].addr;

            var p2 = document.createElement("p");
            p2.id = "p2"+x;
            p2.innerHTML = p2.innerHTML + getName(Orders[x].pizza).value;

            var p3 = document.createElement("p");
            p3.id = "p3"+x;
            p3.innerHTML = p3.innerHTML + Orders[x].price;

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

            art.appendChild(p1);
            art.appendChild(p2);
            art.appendChild(p3);
            art.appendChild(in1);
            art.appendChild(in2);
            art.appendChild(in3);

            document.getElementById("mainContent").appendChild(art);
        }
    }
    
}