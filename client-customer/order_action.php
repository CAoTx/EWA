<?php

session_start();

$mysqli = new MySQLi('localhost', 'root', '', 'ewa');
// check connection to database
if (mysqli_connect_errno())
throw new Exception("Keine Verbindung zur Datenbank: ".mysqli_connect_error());
// set character encoding to UTF-8
if (!$mysqli->set_charset("utf8"))
throw new Exception("Fehler beim Laden des Zeichensatzes UTF-8: ".$mysqli->error);


//lieferadresse
$adresse = htmlspecialchars($_POST['adresse']);
$sessionID = session_id();

//add new order (with autoincrement ID)
$mysqli->query("INSERT INTO orders (id_order, adress_order, id_session) VALUES (NULL, '$adresse', '$sessionID')");

//get last orders.id_order
$lastOrderID = $mysqli->query("SELECT id_order FROM orders ORDER BY id_order DESC")->fetch_assoc()['id_order'];


//add new ordered pizzas
$orderedPizzas = $_POST['pizzaOrder'];
foreach ($orderedPizzas as $orderedPizza) {
    $mysqli->query("INSERT INTO ordered_pizza (id_bestellung, name_pizza, status) VALUES ($lastOrderID, '$orderedPizza', '1')");
}


header("location: status.php");
?>