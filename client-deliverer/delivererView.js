"use strict "

window.addEventListener('load', function () {
    createOrders();
    alterOrder(0, 1);
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
        if (data[i].key == idx){
            Orders[i].status = 3;
        }
    }

     for (var j = 0; j < data.length; j++) {
         console.log(data[j]);
     }
 
 }
