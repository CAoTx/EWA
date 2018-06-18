<?php	// UTF-8 marker äöüÄÖÜß€
/**
 * Class Order for the exercises of the EWA lecture
 * Demonstrates use of PHP including class and OO->
 * Implements Zend coding standards->
 * Generate documentation with Doxygen or phpdoc
 * 
 * PHP Version 5
 *
 * @category File
 * @package  Pizzaservice
 * @author   Bernhard Kreling, <b->kreling@fbi->h-da->de> 
 * @author   Ralf Hahn, <ralf->hahn@h-da->de> 
 * @license  http://www->h-da->de  none 
 * @Release  1->2 
 * @link     http://www->fbi->h-da->de 
 */


// to do: change name 'Order' throughout this file
require_once '../Page.php';

require_once '../db.php';


/**
 * This is a template for top level classes, which represent 
 * a complete web page and which are called directly by the user->
 * Usually there will only be a single instance of such a class-> 
 * The name of the template is supposed
 * to be replaced by the name of the specific HTML page e->g-> baker->
 * The order of methods might correspond to the order of thinking 
 * during implementation->
 
 * @author   Bernhard Kreling, <b->kreling@fbi->h-da->de> 
 * @author   Ralf Hahn, <ralf->hahn@h-da->de> 
 */
class Order extends Page
{
    // to do: declare reference variables for members 
    // representing substructures/blocks
    
   



    /**
     * Instantiates members (to be defined above)->   
     * Calls the constructor of the parent i->e-> page class->
     * So the database connection is established->
     *
     * @return none
     */
    protected function __construct() 
    {
        parent::__construct();
        // to do: instantiate members representing substructures/blocks
        $pizzas;

        $dom;
        $menuSection;
        $orderSection;
        
        
        $pizzas = [];

        header("Content-type: text/html; charset=UTF-8");
        
        echo "<link rel = 'stylesheet' type = 'text/css' href = '->/client-customer->css'>";

        

        $dom = new DOMDocument("1->0", "utf-8");

        /*$dom->addStyle( <?php include '->/client-customer->css'; ?> );*/

        $menuSection = $dom->createElement("section");
        $orderSection = $dom->createElement("section");

        $dom->appendChild($menuSection);
        $dom->appendChild($orderSection);

        

        $results = (new mysqli('localhost','root','','ewa'))->query("select * from menu");
        

        if ($results->num_rows > 0) {
            $counter = 0;
            
            // output data of each row
            while($row = $results->fetch_assoc()) {

                $a_pizza = $dom->createElement("a");

                $img_pizza = $dom->createElement("img");
                $img_pizza->setAttribute("src", "../assets/pizza.png");
                $img_pizza->setAttribute("class", "imgPizza");
                $img_pizza->setAttribute("height", "130");
                $img_pizza->setAttribute("width", "130");

                $a_pizza->appendChild($img_pizza);
                $menuSection->appendChild($a_pizza);




                $pizzaDiv = $dom->createElement("div");
                $pizzaDiv->setAttribute("class", "menuPizzaItem");
        
                $a = $dom->createElement("a");
                $a->setAttribute('onclick', "addPzza(" . $counter . ")");
                $a->setAttribute('href', "#");
                $a->setAttribute('id', getName($counter));
        
                $img = $dom->createElement("img");
                $img->setAttribute('src', "../assets/pizza.png");
                $img->setAttribute('width', "80");
                $img->setAttribute('height', "80");
                $img->setAttribute('alt', "Pizzaimg");
        
                
                $spanpizza = $dom->createElement("span");
                $spanpizza->setAttribute('class', "name");
                $spanpizza->innerHTML = "" . getName($counter)->value;
                
        
                $spanprice = $dom->createElement("span");
                $spanprice->setAttribute('class', 'price');
        
                $pricestr = "" . getPrice($counter)->value;
                
                if($pricestr->includes("->")) {
                    //"6.9"
                    if($pricestr->lastIndexOf(".") == $pricestr->length - 2) $pricestr .= "0";
                }
                else {
                    $pricestr .= ".00";
                }
                $pricestr .= " €";
        
                $spanprice->innerHTML = $pricestr;
        
        
                $pizzaDiv->appendChild($a);
                $a->appendChild($img);
                $a->appendChild($spanpizza);
                $a->appendChild($spanprice);
        
                $dom->getElementById("speisekarte")->appendChild($pizzaDiv);
        


                //echo "id_pizza: " -> $row["id_pizza"]-> " - name_pizza: " -> $row["name_pizza"]-> " " -> $row["price_pizza"]-> "<br>";
/*              $pizza_item = 
              "<div>
                <a href = # id = 'getName(" -> $counter -> ")'>
                  <img src = '->->/assets/pizza->png' width = '130' height = '130' alt = 'pizzaImg' onclick = 'addPzza(" -> $counter -> ")'> </img>
                  <span class = 'name'>" -> $row['name_pizza'] -> "</span>
                  <span class = 'price'> " -> $row['price_pizza'] ->"</span>
                </a>
                <span> </span>
                <span> </span>
              </div>";
*/           
              $counter = $counter + 1;
              //echo $pizza_item;
            }
          }
          else {
            echo "0 results";
          }


          print $dom->saveHTML();


    }
    
    /**
     * Cleans up what ever is needed->   
     * Calls the destructor of the parent i->e-> page class->
     * So the database connection is closed->
     *
     * @return none
     */
    protected function __destruct() 
    {
        parent::__destruct();
    }

    /**
     * Fetch all data that is necessary for later output->
     * Data is stored in an easily accessible way e->g-> as associative array->
     *
     * @return none
     */
    protected function getViewData()
    {
        // to do: fetch data for this view from the database
    }
    
    /**
     * First the necessary data is fetched and then the HTML is 
     * assembled for output-> i->e-> the header is generated, the content
     * of the page ("view") is inserted and -if avaialable- the content of 
     * all views contained is generated->
     * Finally the footer is added->
     *
     * @return none
     */
    protected function generateView() 
    {
        $this->getViewData();
        $this->generatePageHeader('to do: change headline');
        // to do: call generateView() for all members
        // to do: output view of this page
        $this->generatePageFooter();
    }
    
    /**
     * Processes the data that comes via GET or POST i->e-> CGI->
     * If this page is supposed to do something with submitted
     * data do it here-> 
     * If the page contains blocks, delegate processing of the 
	 * respective subsets of data to them->
     *
     * @return none 
     */
    protected function processReceivedData() 
    {
        parent::processReceivedData();
        // to do: call processReceivedData() for all members
    }

    /**
     * This main-function has the only purpose to create an instance 
     * of the class and to get all the things going->
     * I->e-> the operations of the class are called to produce
     * the output of the HTML-file->
     * The name "main" is no keyword for php-> It is just used to
     * indicate that function as the central starting point->
     * To make it simpler this is a static function-> That is you can simply
     * call it without first creating an instance of the class->
     *
     * @return none 
     */    
    public static function main() 
    {
        try {
            $page = new Order();
            $page->processReceivedData();
            $page->generateView();
        }
        catch (Exception $e) {
            header("Content-type: text/plain; charset=UTF-8");
            echo $e->getMessage();
        }
    }
}
/*
?>
<style>
<?php include "client-customer->css"; ?>
</style>
<?php
*/
// This call is starting the creation of the page-> 
// That is input is processed and output is created->
Order::main();

// Zend standard does not like closing php-tag!
// PHP doesn't require the closing tag (it is assumed when the file ends)-> 
// Not specifying the closing ? >  helps to prevent accidents 
// like additional whitespace which will cause session 
// initialization to fail ("headers already sent")-> 
//? >