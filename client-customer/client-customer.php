<?php
include '../db.php';

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>Order</title>
  <meta charset="utf-8">
  <!-- <meta http-equiv="refresh" content = "5" /> -->
  <link rel = "stylesheet" type = "text/css" href = "client-customer.css">
</head>

<body style="background-color: lightgray">
  <header>
    <h1>Order</h1>
  </header>

  <div>
    <section>
      <section id = "speisekarte" class= "pizzaOffer">
        
        <?php
        
        $sqlQuery = "select * from menu";
        
        $pizzas = $mysqli->query($sqlQuery);
        
        if ($pizzas->num_rows > 0) {
          $counter = 0;
          
          // output data of each row
          while($row = $pizzas->fetch_assoc()) {
            //echo "id_pizza: " . $row["id_pizza"]. " - name_pizza: " . $row["name_pizza"]. " " . $row["price_pizza"]. "<br>";
            $pizza_item = 
            "<div>
              <a href = # id = 'getName(" . $counter . ")'>
                <img src = '../assets/pizza.png' width = '130' height = '130' alt = 'pizzaImg' onclick = 'addPzza(" . $counter . ")'> </img>
                <span class = 'name'>" . $row['name_pizza'] . "</span>
                <span class = 'price'> " . $row['price_pizza'] ."</span>
              </a>
              <span> </span>
              <span> </span>
            </div>";
          
            $counter = $counter + 1;
            echo $pizza_item;
          }
        }
        else {
          echo "0 results";
        }
        
        ?>


<!--        <tr>
          <td><a href="#" id="add-hawaii"><img src="../assets/pizza.png" width="130" height="130" alt="Hawaii Pizza" onclick="addPzza(2)"></a></td><td><span class="name">Hawaii</span></td><td> 5, 50 € </a></td>
        </tr> -->
      </section>

      <section id = "bestellbuttons" class = "orderButtons">
      <form action="https://www.fbi.h-da.de/cgi-bin/Echo.pl" method= "POST" id = "pizzaOrderList">
        <select id = "shopping_cart" class = "shopping_cart" name="shopping_cart[]" multiple size="10" ><option>Warenkorb</option> </select>

        <input type = "text" class = "block_input" id = "adresse" name = "adresse" placeholder = "Lieferadresse angeben...">
        <input type = "text" id = "preis" name = "preis" placeholder = "0.00 €" readonly value = "0.00">

        <input type = "submit" name = "submit" />
      </form>

      <button type="reset" id="delete-all" onclick="removeAllPizzas()">Delete all</button>
      <button type="button" id="delete-selected" onclick="removeSelectedPizza()">Delete selected</button>
      <button type="submit">Order</button>

    </section>

    
    
  </section>
</div>
    
  </body>

  
  <script type="text/javascript" src="../db.js"></script>
  <script type="text/javascript" src="orderView.js"></script>
</html>
