<?php // UTF-8 marker äöüÄÖÜß€
require_once '../Page.php';

class Baker extends Page

{
    var $orders;
    var $restFlag;
    protected
    function __construct()
    {
        parent::__construct();
        $this->orders = [];
        $this->restFlag = false;
    }

    protected
    function __destruct()
    {
        parent::__destruct();
    }

    protected
    function getViewData()
    {
        $this->orders = $this->_database->query("SELECT * FROM ordered_pizza WHERE status BETWEEN 0 AND 2");
        if (!$this->orders->num_rows > 0)
        {
            $this->restFlag = true;
        }
    }

    protected
    function generateView()
    {
        // SET OUTPUTDATA

        $pizzaname;
        $pizzaID;
        $bestellID;
        $status;
        $check1;
        $check2;
        $check3;

        $this->getViewData();
        $this->generatePageHeader('bakerView');

        // OUTPUT

        if ($this->restFlag)
        {
            echo <<<EOT
        <header>
        <h1>Baker</h1>
        <h3>Rest Buddy, Nothing to Do</h3>
        </header>
EOT;
        }
        else
        {
            echo <<<EOT
        <header>
                <h1>Baker</h1>
        </header>
EOT;
        }

        echo <<<EOT
                    <section> 
EOT;
        while ($row = $this->orders->fetch_assoc())
        {
            $pizzaname = $row['name_pizza'];
            $pizzaID = $row['id_orderedpizza'];
            $bestellID = $row['id_bestellung'];
            $status = $row['status'];
            switch ($status)
            {
            case "1":
                $check1 = "checked=''";
                $check2 = "";
                $check3 = "";
                break;

            case "2":
                $check1 = "";
                $check2 = "checked=''";
                $check3 = "";
                break;

            case "3":
                $check1 = "";
                $check2 = "";
                $check3 = "checked=''";
                break;

            default:
                $check1 = "";
                $check2 = "";
                $check3 = "";
                echo "<script>console.log('ID:' + $bestellID + ', case: default');</script>";
                break;
            }

            echo <<<EOT
            
                    <article> 
                    <p>$pizzaname</p>
                    <p>PizzaID: $pizzaID</p>
                    <p>OrderID: $bestellID</p>

                    <form action='action.php' method='POST'>
                    <input type='hidden' value=$pizzaID name='pizzaID'>
                    <input type='hidden' value=$bestellID name='bestellID'>

                    <label class='radioLabel'>Ordered
                    <input type='radio' value='1' onclick='this.form.submit();' name='radioinput'    $check1   >
                    <span class='radioSpan'></span>
                    </label>

                    <label class='radioLabel'>Baking
                    <input type='radio' value='2' onclick='this.form.submit();' name='radioinput'  $check2  >
                    <span class='radioSpan'></span>
                    </label>

                    <label class='radioLabel'>Ready
                    <input type='radio' value='3' onclick='this.form.submit();' name='radioinput'  $check3  >
                    <span class='radioSpan'></span>
                    </label>

                    </form>

                    </article>
EOT;
        }

        echo <<<EOT
                    </section>
EOT;
        $this->generatePageFooter("bakerView");
    }

    protected
    function processReceivedData()
    {
        parent::processReceivedData();
    }

    public static

    function main()
    {
        try
        {
            $page = new Baker();
            $page->processReceivedData();
            $page->generateView();
        }

        catch(Exception $e)
        {
            header("Content-type: text/plain; charset=UTF-8");
            echo $e->getMessage();
        }
    }
}

Baker::main();

// Zend standard does not like closing php-tag!
// PHP doesn't require the closing tag (it is assumed when the file ends).
// Not specifying the closing ? >  helps to prevent accidents
// like additional whitespace which will cause session
// initialization to fail ("headers already sent").


