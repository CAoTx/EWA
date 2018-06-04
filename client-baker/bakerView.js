' use strict '

window.addEventListener('load', function () {
    createContent();
    return;
});

function setStatus(idx, stat) {
    if (idx > 0 && idx < Orders.length){
        Orders[idx].status = stat;
        console.log ("Baker setted status, ID:" + Orders[idx].ord_id + ", Status:"+stat);
        console.log("UPDATE bestellungen SET status= " + stat + " WHERE id = " + Orders[idx].ord_id);
    }
    return;
}

function createContent() {

    alreadyPrinted = [];

    for (var x = 0; x < Orders.length; x++) {

        if (Orders[x].status > 1 && Orders[x].status < 4) {

            var art = document.createElement("article");

            var pName = document.createElement("p");
            pName.innerHTML = "Pizza: " + getName(Orders[x].pizza).value;

            var pId = document.createElement("p");
            pId.innerHTML = "Bestellung: " + Orders[x].ord_id;

            var lab1 = document.createElement("label");
            lab1.setAttribute("class", "radioLabel");
            var lab2 = document.createElement("label");
            lab2.setAttribute("class", "radioLabel");
            var lab3 = document.createElement("label");
            lab3.setAttribute("class", "radioLabel");
            lab1.innerHTML = "Ordered";
            lab2.innerHTML = "Baking";
            lab3.innerHTML = "Ready";

            var sp1 = document.createElement("span");
            sp1.setAttribute("class", "radioSpan");
            var sp2 = document.createElement("span");
            sp2.setAttribute("class", "radioSpan");
            var sp3 = document.createElement("span");
            sp3.setAttribute("class", "radioSpan");


            var in1 = document.createElement("input");
            in1.setAttribute("type", "radio");
            in1.setAttribute("value", "0");
            in1.setAttribute("onclick", "setStatus(" + x + ", 1)");
            in1.setAttribute("name", "in" + x);

            var in2 = document.createElement("input");
            in2.setAttribute("type", "radio");
            in2.setAttribute("value", "1");
            in2.setAttribute("name", "in" + x);
            in2.setAttribute("onclick", "setStatus(" + x + ", 2)");

            var in3 = document.createElement("input");
            in3.setAttribute("type", "radio");
            in3.setAttribute("value", "2");
            in3.setAttribute("onclick", "setStatus(" + x + ", 3)");
            in3.setAttribute("name", "in" + x);

            switch (Orders[x].status) {
                case 2: in1.setAttribute("checked", "checked"); break;
                case 3: in2.setAttribute("checked", "checked"); break;
            }

            lab1.appendChild(in1);
            lab1.appendChild(sp1);
            lab2.appendChild(in2);
            lab2.appendChild(sp2);
            lab3.appendChild(in3);
            lab3.appendChild(sp3);

            art.appendChild(pName);
            art.appendChild(pId);
            art.appendChild(lab1);
            art.appendChild(lab2);
            art.appendChild(lab3);

            document.getElementById("mainContent").appendChild(art);

        }
    }
    return;
}