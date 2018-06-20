<?php
require_once '../Page.php';

//Get array of the pizza associated to the OrderID to change all their status

    $db = new MySQLi('localhost', 'root', '', 'ewa');
    $pizzasToChange = $db->query(
    "SELECT * FROM ordered_pizza INNER JOIN orders
    WHERE ordered_pizza.id_bestellung = " . $_POST['bestellID'] . " 
    AND orders.id_order = " . $_POST['bestellID']
);

//Change status for each pizza of this Order
while($row = $pizzasToChange->fetch_assoc()){

    (new MySQLi('localhost', 'root', '', 'ewa'))->query("
    UPDATE ordered_pizza SET status = " . $_POST['radioinput'] . "
    WHERE id_orderedpizza = ".  $row['id_orderedpizza'] . "
    AND id_bestellung = " . $row['id_bestellung']
    );
}

header("location: deliverer.php");
?>