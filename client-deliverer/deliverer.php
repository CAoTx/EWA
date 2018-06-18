<?php	// UTF-8 marker äöüÄÖÜß€

require_once '../Page.php';

class Deliverer extends Page
{
   var $orders;
    protected function __construct() 
    {
        parent::__construct();
        
        $this->orders = [];   
    }

    protected function __destruct() 
    {
        parent::__destruct();
    }

    protected function getViewData()
    {
        $this->orders = $this->_database->query(
            "SELECT * FROM ordered_pizza INNER JOIN orders WHERE ordered_pizza.id_bestellung = orders.id_order AND status BETWEEN 2 AND 5"
        );
        if (!$this->orders->num_rows > 0) {
            $counter = 0;
            echo "<h2>Can't resolve query\nGO HOME</h2>";
        }
    }
    
    protected function generateView() 
    {
        $pizzaname;
        $pizzaID;
        $bestellID;
        $status;
        $adress;

       $check1;
       $check2;
       $check3;

        $this->getViewData();
        $this->generatePageHeader('delivererView');


        //OUTPUT
        echo <<<EOT
                    <header>
                        <h1>Deliverer</h1>
                    </header>
                    <section> 
EOT;
            while($row = $this->orders->fetch_assoc()){
                $pizzaname = $row['name_pizza'];
                $pizzaID = $row['id_orderedpizza'];
                $bestellID = $row['id_bestellung'];
                $status = $row['status'];
                $adress = $row['adress_order'];
                


                switch($status){
                    case "3": 
                    $check1 = "checked=''"; $check2 = ""; $check3 = ""; break;
                    case "4": 
                    $check1 = ""; $check2 = "checked=''"; $check3 = ""; break;
                    case "5": 
                    $check1 = ""; $check2 = ""; $check3 = "checked=''"; break;
                }

                echo "
                    <article> 
                    <p>$pizzaname</p>
                    <p>$pizzaID</p>
                    <p>$adress</p>

                    <form action='action.php' method='POST'>
                    <input type='hidden' value=$pizzaID name='pizzaID'>
                    <input type='hidden' value=$bestellID name='bestellID'>

                    <label class='radioLabel'>Ready
                    <input type='radio' value='3' onclick='this.form.submit();' name='radioinput'    $check1   >
                    <span class='radioSpan'></span>
                    </label>

                    <label class='radioLabel'>Fly
                    <input type='radio' value='4' onclick='this.form.submit();' name='radioinput'  $check2  >
                    <span class='radioSpan'></span>
                    </label>

                    <label class='radioLabel'>Done
                    <input type='radio' value='5' onclick='this.form.submit();' name='radioinput'  $check3  >
                    <span class='radioSpan'></span>
                    </label>

                    </form>

                    </article>
                ";
            }
        echo <<<EOT
                    </section>
EOT;

        $this->generatePageFooter();
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