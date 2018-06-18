<?php	// UTF-8 marker äöüÄÖÜß€

require_once '../Page.php';

class Deliverer extends Page
{
   var $orders;
   var $restFlag;

    protected function __construct() 
    {
        parent::__construct();
        
        $this->orders = [];   
        $this->restFlag = false;
    }

    protected function __destruct() 
    {
        parent::__destruct();
    }

    protected function getViewData()
    {
        $this->orders = $this->_database->query(
            "SELECT * FROM ordered_pizza INNER JOIN orders INNER JOIN menu WHERE ordered_pizza.id_bestellung = orders.id_order AND ordered_pizza.status > 2 AND ordered_pizza.status < 5 AND ordered_pizza.name_pizza = menu.name_pizza"
        );
        if (!$this->orders->num_rows > 0) {
            $this->restFlag = true;
        }
    }
    
    protected function generateView() 
    {
        $pizzaname;
        $pizzaID;
        $orderID;
        $status;
        $adress;
        $price;

       $check1;
       $check2;
       $check3;

        $this->getViewData();
        $this->generatePageHeader('delivererView');


        //OUTPUT
        if($this->restFlag){
            echo <<<EOT
            <header>
                    <h1>Deliverer</h1>
                    <h3>Rest Buddy, Nothing to Do</h3>
            </header>
EOT;
            }else{
            echo <<<EOT
            <header>
                    <h1>Deliverer</h1>
            </header>
EOT;
                }
            echo <<<EOT
                        <section> 
EOT;
            while($row = $this->orders->fetch_assoc()){
                $pizzaname = $row['name_pizza'];
                $pizzaID = $row['id_orderedpizza'];
                $orderID = $row['id_bestellung'];
                $status = $row['status'];
                $adress = $row['adress_order'];
                $price = $row['price_pizza'];
                


                switch($status){
                    case "3": 
                    $check1 = "checked=''"; $check2 = ""; $check3 = ""; break;
                    case "4": 
                    $check1 = ""; $check2 = "checked=''"; $check3 = ""; break;
                    case "5": 
                    $check1 = ""; $check2 = ""; $check3 = "checked=''"; break;
                    default : 
                    $check1 = ""; $check2 = ""; $check3 = "";
                    echo "<script>console.log('ID:' + $orderID + ', case: default');</script>";
                    break;
                }

                echo <<<EOT
                    <article> 
                    <p>$pizzaname , $price €</p>
                    <p>PizzaID: $pizzaID</p>
                    <p>OrderID: $orderID</p>
                    <p>$adress</p>

                    <form action='action.php' method='POST'>
                    <input type='hidden' value=$pizzaID name='pizzaID'>
                    <input type='hidden' value=$orderID name='bestellID'>

                    <label class='radioLabel'>Ready
                    <input type='radio' value='3' onclick='this.form.submit();' name='radioinput' $check1   >
                    <span class='radioSpan'></span>
                    </label>

                    <label class='radioLabel'>Fly
                    <input type='radio' value='4' onclick='this.form.submit();' name='radioinput' $check2  >
                    <span class='radioSpan'></span>
                    </label>

                    <label class='radioLabel'>Done
                    <input type='radio' value='5' onclick='this.form.submit();' name='radioinput' $check3  >
                    <span class='radioSpan'></span>
                    </label>

                    </form>

                    </article>
EOT;
            }
        echo <<<EOT
                    </section>
EOT;

        $this->generatePageFooter("delivererView");
    }
    protected function processReceivedData() 
    {
        parent::processReceivedData();
        // to do: call processReceivedData() for all members
    }

    public static function main() 
    {
        try {
            $page = new Deliverer();
            $page->processReceivedData();
            $page->generateView();
        }
        catch (Exception $e) {
            header("Content-type: text/plain; charset=UTF-8");
            echo $e->getMessage();
        }
    }
}
Deliverer::main();

// Zend standard does not like closing php-tag!
// PHP doesn't require the closing tag (it is assumed when the file ends). 
// Not specifying the closing ? >  helps to prevent accidents 
// like additional whitespace which will cause session 
// initialization to fail ("headers already sent"). 
//? >