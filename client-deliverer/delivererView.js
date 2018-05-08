"use strict "

window.addEventListener('load', function () {
  //  createContent();
});

function _getPrice(idx) {
    console.log("Id = " + getPrice(idx).key);
    console.log("Price = " + getName(idx).value);
}

function _btnOne() {
    console.log()
}

function createOrders() {

    var data = getOrders();

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }

}

function alterOrder(idx, stat) {

    var data = getOrders();

    for (var i = 0; i < data.length; i++) {
        if (data[i].key == idx) {
            Orders[i].status = stat;
        }
    }

    for (var j = 0; j < data.length; j++) {
        console.log(data[j]);
    }

}

function createContent() {

    var div = document.createElement("div");

    for (var x = 0; x < Orders.length; x++) {


        var span = document.createElement("span");


        //create input element
        var artcl = document.createElement("article");
        artcl.class = "order";
        artcl.name = "article";
        artcl.id = "article" + x;

        //
        var f = document.createElement("form");
        f.setAttribute('method', "post");
        f.setAttribute('action', "http://www.fbi.h-da.de/cgi-bin/Echo.pl");


        //
        var h = document.createElement("h3");
        h.id = "adresse" + x;
        h.name = "adresse" + x;

        //Create Ordered Pizza
        var p1 = document.createElement("p");
        p1.id = "pizza" + x + ".1";
        p1.name = "pizza " + Orders[x];
        p1.innerHTML = getName(Orders[x].p1).value;

        //Create Ordered Pizza
        var p2 = document.createElement("p");
        p2.id = "pizza" + x + ".2";
        p2.name = "pizza " + Orders[x];
        p2.innerHTML = getName(Orders[x].p2).value;


        //Create Ordered Pizza
        var p3 = document.createElement("p");
        p3.id = "pizza" + x + ".3";
        p3.name = "pizza " + Orders[x];
        p3.innerHTML = getName(Orders[x].p3).value;


        //Create Ordered Pizza
        var p4 = document.createElement("p");
        p4.id = "pizza" + x + ".4";
        p4.name = "pizza " + Orders[x];
        p4.innerHTML = getName(Orders[x].p4).value;


        //Create Ordered Price TODO
        var p5 = document.createElement("p");
        p5.id = "price" + x;
        p5.name = "price " + Orders[x];
        p5.innerHTML = 69;

        var t = document.createElement("table");

        var tr1 = document.createElement("tr");
        var td1 = document.createElement("td");
        var l1 = document.createElement("label");
        l1.innerHTML = "Ready";
        var i1 = document.createElement("input");
        i1.type = "radio";
        i1.name = "Order " + x;
        i1.value = "0";




        var td2 = document.createElement("td");
        var l2 = document.createElement("label");
        l2.innerHTML = "Ready";
        var i2 = document.createElement("input");
        i2.type = "radio";
        i2.name = "Order " + x;
        i2.value = "1";
        i2.onclick = "alterOrder(" + i2.value + "," + 2 + ")";



        var td3 = document.createElement("td");
        var l3 = document.createElement("label");
        l3.innerHTML = "Ready";
        var i3 = document.createElement("input");
        i3.type = "radio";
        i3.name = "Order " + x;
        i3.value = "2";
        i3.onclick = "alterOrder(" + i3.value + "," + 2 + ")";

        span.appendChild(artcl);

        artcl.appendChild(f);
        f.appendChild(h);
        f.appendChild(p1);
        f.appendChild(p2);
        f.appendChild(p3);
        f.appendChild(p4);
        f.appendChild(p5);
        f.appendChild(t);
        t.appendChild(tr1);

        tr1.appendChild(td1);
        td1.appendChild(l1);
        l1.appendChild(i1);

        tr1.appendChild(td2);
        td1.appendChild(l2);
        l2.appendChild(i2);

        tr1.appendChild(td3);
        td3.appendChild(l3);
        l3.appendChild(i3);



        console.log(artcl);

        div.appendChild(span)

    }
    
    document.getElementById("mainContent").appendChild(div);
}