"use strict "

var PizzaNames = [

    {
        key: 1, value: "Salami"
    },
    {
        key: 2, value: "Cheese"
    },
    {
        key: 3, value: "Peperoni"
    },
    {
        key: 4, value: "Tuna"
    },
    {
        key: 5, value: "Ham"
    },
    {
        key: 6, value: "Veggi"
    },
]

var PizzaPrices = [

    {
        key: 1, value: 6.00
    },
    {
        key: 2, value: 5.00
    },
    {
        key: 3, value: 6.90
    },
    {
        key: 4, value: 6.00
    },
    {
        key: 5, value: 6.00
    },
    {
        key: 6, value: 6.50
    },
]

var Orders = [
    //status 1=Orderes, 2=Baking, 3=OnItsWay
    {
        key:1, price: 54.00, p1:1, p2:2, p3:3, p4:4, status:3
    },
    {
        key:2, price: 24, p1:3, p2:5, p3:0, p4:0, status:2
    },
]


function getPrice(Pid) {

   return PizzaPrices[Pid];

}

function getName(Pid){
    return PizzaNames[Pid];
}

function addOrder(data){
    Orders.push({
        key: data.key, price: data.price , p1:data.p1, p2:data.p2, p3:data.p3, p4:data.p4, status:1
    });
}

