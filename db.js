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
    //status 1=Orderes, 2=Baking, 3=OnItsWay
    {
        key: 2, price: 54.00, p1: 0, p2: 1, p3: 2, p4: -1, status: 2, addr:"64253"
    },
    {
        key: 3, price: 24, p1: 3, p2: 4, p3: -1, p4: -1, status: 3, addr:"54673"
    },
]


function getPrice(Pid) {
    return PizzaPrices[Pid];
}

function getName(Pid) {
    return PizzaNames[Pid];
}

function addOrder(data) {
    Orders.push({
        key: data.key, price: data.price, p1: data.p1, p2: data.p2, p3: data.p3, p4: data.p4, status: 1, addr: data.addr
    });
}

function getLastWaiting() {
    return Orders.length;
}

function getWaitingOrders() {
    var arr = [];
    for (var i = 0; i < Orders.length; i++) {
        if (Orders[i].status < 2) {
            arr.push(Orders[i]);
        }
    }
    return arr;
}

function getOrders(){
    return Orders; 
}

