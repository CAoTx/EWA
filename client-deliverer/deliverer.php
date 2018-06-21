<?php	// UTF-8 marker äöüÄÖÜß€

require_once '../Page.php';

class Output {

    public $price;
    public $status;
    public $adress;
    public $names;
    public $orderID;

    public function __construct($id, $adrs) 
    {
        $this->names = []; 
        $this->status = 3; 
        $this->price = 0;
        $this->orderID = $id;
        $this->adress = $adrs;
    }

    public function __destruct() 
    {
    }

    public function _addPizza($name, $prc, $sts){
        
        if($sts < 3 || $sts > 4){
            $this->status = -1;
        }
        else if ($sts == 3 && $this->status > 2){$this->status = 3;}
        else if ($sts == 4 && $this->status > 3){$this->status = 4;}

        array_push($this->names, $name);

        $this->price = $this->price + $prc;
    }

    public function printNames(){
        $str = '';
        foreach($this->names as $name) {
        $str = $str.$name.', ';
    }
    echo <<<EOT
    $str
EOT;
}

    public function printData(){
        echo <<<EOT
        <p>OrderId: $this->orderID</p>
        <p>Price: $this->price €</p>
        <p>$this->adress</p>
EOT;
    }

    public function getStatus(){
        return $this->status;
    }
}



//////////// ACTUAL DELIVERER CLASS ///////////////


class Deliverer extends Page
{
   var $orders;
   var $restFlag;
   var $mapOrders;

    protected function __construct() 
    {
        parent::__construct();
        
        $this->orders = [];   
        $this->restFlag = false;
        $this->mapOrders = [];
    }

    protected function __destruct() 
    {
        parent::__destruct();
    }

    protected function getViewData()
    {
      
        $this->orders = $this->_database->query(
            "SELECT * FROM ordered_pizza INNER JOIN orders INNER JOIN menu 
            WHERE ordered_pizza.id_bestellung = orders.id_order 
            AND ordered_pizza.name_pizza = menu.name_pizza 
            ORDER BY ordered_pizza.id_bestellung ASC"
        );
        if (!$this->orders->num_rows > 0) {
            $this->restFlag = true;
        }

        $arr = $this->orders->fetch_all(MYSQLI_ASSOC);
        $oldid = 'INIT';
        $mapPtr = 0; 

/////////////Forloop to check if a whole order is done (All pizzas done)////////////////////
        for($idx = 0; $idx < count($arr); $idx++){
            
                if($oldid != $arr[$idx]['id_bestellung']){
                    $newTyp = new Output($arr[$idx]['id_bestellung'],$arr[$idx]['adress_order']);
                    $newTyp->_addPizza($arr[$idx]['name_pizza'], $arr[$idx]['price_pizza'], $arr[$idx]['status']);
                    $mapPtr = array_push($this->mapOrders, $newTyp);
                    $oldid = $arr[$idx]['id_bestellung'];
                }
                else{
                    $this->mapOrders[$mapPtr - 1]->_addPizza($arr[$idx]['name_pizza'], $arr[$idx]['price_pizza'], $arr[$idx]['status']);
                }
        }
    }
    
    protected function generateView() 
    {
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

            for ($index = 0; $index < count($this->mapOrders); $index++){

                //SET OUTPUTDATA
                $dummy = $this->mapOrders[$index];
                $attributes = get_object_vars($dummy);
                $ordID = $attributes['orderID'];
                $adrs = $attributes['adress'];
                $stat = $attributes['status'];
                $prc = $attributes['price'];
                $nms = $attributes['names'];
                
                echo <<<EOT
                <script>console.log($stat + ", " + $ordID)</script>
EOT;
 
                if($stat == 3 || $stat == 4){
                switch($stat){
                 case "3": 
                 $check1 = "checked=''"; $check2 = ""; $check3 = ""; break;
                case "4": 
                 $check1 = ""; $check2 = "checked=''"; $check3 = ""; break;
                 case "5": 
                 $check1 = ""; $check2 = ""; $check3 = "checked=''"; break;
                  default : 
                  $check1 = ""; $check2 = ""; $check3 = "";
                echo "<script>console.log('ID:' + $ordID + 'Value:' + $stat + ', case: default');</script>";
                 break;
                   }


                //PRINTING

                echo <<<EOT
                <article>
                <p>
EOT;
                   $dummy->printNames();

                   echo <<<EOT
                </p>
                    
EOT;
                   $dummy->printData();
                echo <<<EOT

                <form action='action.php' method='POST' name="tescht">
                <input type='hidden' value=$ordID name='bestellID'>

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