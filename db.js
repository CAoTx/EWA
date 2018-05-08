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


function getPrice(index) {

   return PizzaPrices[index];

}

function getName(index){
    return PizzaNames[index];
}
