"use strict "

var PizzaNames = [

    {
        key: 0, value: "Salami"
    },
    {
        key: 1, value: "Cheese"
    },
    {
        key: 2, value: "Peperoni"
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
        key: 0, value: 6.00
    },
    {
        key: 1, value: 5.00
    },
    {
        key: 2, value: 6.90
    },
    {
        key: 3, value: 6.00
    },
    {
        key: 4, value: 6.00
    },
    {
        key: 5, value: 6.50
    },
]

var Orders = [
    //status 1=Ordered, 2=Baking, 3=Ready 4=OnItsWay 5=Delivered
    {
        ord_id: 2, price: 54.00, pizza: 2, status: 4, addr:"Max MusterMann Heidelberger 2, 64285"
    },
    {
        ord_id: 2, price: 24, pizza: 3, status: 3, addr:"Jan Dubi Bessunger 2, 97223"
    },
    {
        ord_id: 2, price: 54.00, pizza: 0, status: 4, addr:"Tim Meyer Süliche Ringstraße 2, 53921"
    },
    {
        ord_id: 3, price: 24, pizza: 3, status: 3, addr:"Max MusterMann Heidelberger 2, 83392"
    },
    {
        ord_id: 4, price: 54.00, pizza: 0, status: 4, addr:"Max MusterMann Heidelberger 2, 409942"
    },
    {
        ord_id: 4, price: 24, pizza: 3, status: 3, addr:"Max MusterMann Heidelberger 2, 48432"
    },
    {
        ord_id: 4, price: 54.00, pizza: 2, status: 4, addr:"Max MusterMann Heidelberger 2, 64285"
    },
    {
        ord_id: 5, price: 24, pizza: 3, status: 3, addr:"Jan Dubi Bessunger 2, 97223"
    },
    {
        ord_id: 5, price: 54.00, pizza: 0, status: 4, addr:"Tim Meyer Süliche Ringstraße 2, 53921"
    },
    {
        ord_id: 6, price: 24, pizza: 3, status: 3, addr:"Max MusterMann Heidelberger 2, 83392"
    },
    {
        ord_id: 7, price: 54.00, pizza: 0, status: 4, addr:"Max MusterMann Heidelberger 2, 409942"
    },
    {
        ord_id: 8, price: 24, pizza: 3, status: 3, addr:"Max MusterMann Heidelberger 2, 48432"
    },
]


function getPrice(Pid) {
    if (Pid < 0){
        return 0;
    }
    return PizzaPrices[Pid];
}

function getName(Pid) {
    if (Pid < 0){
        return "";
    }
    return PizzaNames[Pid];
}

function addOrder(data) {
    Orders.push({
        ord_id: data.ord_id, price: data.price, pizza: data.pizza, status: 1, addr: data.addr
    });
}

function getLastWaiting() {
    return Orders.length;
}

function getWaitingOrders() {
    var arr = [];
    for (var i = 0; i < Orders.length; i++) {
        if (Orders[i].status < 5 && Orders[i].status > 2) {
            arr.push(Orders[i]);
        }
    }
    return arr;
}