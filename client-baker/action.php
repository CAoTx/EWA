<?php
require_once '../Page.php';


(new MySQLi('localhost', 'root', '', 'ewa'))->query("
UPDATE ordered_pizza SET status = " . $_POST['radioinput'] . " WHERE id_orderedpizza = "
 . $_POST['pizzaID']. " AND id_bestellung = " . $_POST['bestellID']
);

header("location: baker.php");
?>