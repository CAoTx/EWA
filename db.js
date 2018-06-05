"use strict";

var PizzaNames = [

    {
        key: 0, value: "Cheese"
    },
    {
        key: 1, value: "Salami"
    },
    {
        key: 2, value: "Pepperoni"
    },
    {
        key: 3, value: "Tuna"
    },
    {
        key: 4, value: "Ham"
    },
    {
        key: 5, value: "Veggi"
    },
]

var PizzaPrices = [

    {
        key: 0, value: 5.00
    },
    {
        key: 1, value: 5.57
    },
    {
        key: 2, value: 5.94
    },
    {
        key: 3, value: 6.46
    },
    {
        key: 4, value: 5.86
    },
    {
        key: 5, value: 6.13
    },
]

var Orders = [
    //status 1=Ordered, 2=Baking, 3=Ready 4=OnItsWay 5=Delivered
    {
        ord_id: 2, price: 54.00, pizza: 0, status: 4, addr: "Max MusterMann Heidelberger 2, 64285"
    },
    {
        ord_id: 2, price: 24, pizza: 1, status: 4, addr: "Jan Dubi Bessunger 2, 97223"
    },
    {
        ord_id: 2, price: 54.00, pizza: 2, status: 4, addr: "Tim Meyer Süliche Ringstraße 2, 53921"
    },
    {
        ord_id: 3, price: 24, pizza: 3, status: 5, addr: "Max MusterMann Heidelberger 2, 83392"
    },
    {
        ord_id: 4, price: 54.00, pizza: 4, status: 3, addr: "Max MusterMann Heidelberger 2, 409942"
    },
    {
        ord_id: 4, price: 24, pizza: 5, status: 3, addr: "Max MusterMann Heidelberger 2, 48432"
    },
    {
        ord_id: 4, price: 54.00, pizza: 0, status: 3, addr: "Max MusterMann Heidelberger 2, 64285"
    }, 
    {
        ord_id: 5, price: 24, pizza: 5, status: 4, addr: "Max MusterMann Heidelberger 2, 48432"
    },
    {
        ord_id: 5, price: 54.00, pizza: 0, status: 4, addr: "Max MusterMann Heidelberger 2, 64285"
    },
    {
        ord_id: 6, price: 24, pizza: 4, status: 2, addr: "Jan Dubi Bessunger 2, 97223"
    },
    {
        ord_id: 6, price: 54.00, pizza: 3, status: 2, addr: "Tim Meyer Süliche Ringstraße 2, 53921"
    },
    {
        ord_id: 7, price: 24, pizza: 3, status: 2, addr: "Max MusterMann Heidelberger 2, 83392"
    },
    {
        ord_id: 8, price: 54.00, pizza: 2, status: 2, addr: "Max MusterMann Heidelberger 2, 409942"
    },
    {
        ord_id: 9, price: 24, pizza: 1, status: 1, addr: "Max MusterMann Heidelberger 2, 48432"
    },
    {
        ord_id: 9, price: 24, pizza: 0, status: 1, addr: "Max MusterMann Heidelberger 2, 48432"
    },
]


function getPrice(Pid) {
    "use strict";
    if (Pid < 0) {
        return 0;
    }
    return PizzaPrices[Pid];
}

function getName(Pid) {
    "use strict";
    if (Pid < 0) {
        return "";
    }
    return PizzaNames[Pid];
}

function addOrder(data) {
    "use strict";
    Orders.push({
        ord_id: data.ord_id, price: data.price, pizza: data.pizza, status: 1, addr: data.addr
    });
}

function nameToIndex(pizzaname) {
    "use strict";
    for(var i = 0; i < PizzaNames.length; i++) {
        if(PizzaNames[i].value == (pizzaname)) return i;
    }
    return -1;
}



function getLastWaiting() {
    "use strict";
    return Orders.length;
}

function getWaitingOrders() {
    "use strict";
    var arr = [];
    for (var i = 0; i < Orders.length; i++) {
        if (Orders[i].status < 5 && Orders[i].status > 2) {
            arr.push(Orders[i]);
        }
    }
    return arr;
}