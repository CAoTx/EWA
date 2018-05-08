"use strict "

window.addEventListener('load', function () {
    createOrders();
    alterOrder(2, 1);
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
            Orders[i].status = stat;
        }
    }

     for (var j = 0; j < data.length; j++) {
         console.log(data[j]);
     }
 
 }



for(var x = 0; x < 4; x++) {
    
    var html = document.getElementById("mainContent").innerHTML;


    if(Orders[x] != null) {
        var m_id = "mainConent" + (x + 1);
        document.getElementById(m_id). = 

    }
    



}
