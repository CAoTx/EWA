<?php	// UTF-8 marker äöüÄÖÜß€
 
abstract class Page
{
    protected $_database = null;  
    
    protected function __construct() 
    {
        // activate full error checking
		error_reporting (E_ALL);

		// open database
		$this->_database = new MySQLi('localhost', 'root', '', 'ewa');
		// check connection to database
	    if (mysqli_connect_errno())
	        throw new Exception("Keine Verbindung zur Datenbank: ".mysqli_connect_error());
		// set character encoding to UTF-8
		if (!$this->_database->set_charset("utf8"))
            throw new Exception("Fehler beim Laden des Zeichensatzes UTF-8: ".$this->database->error);
        
        session_start();
    }
    
    protected function __destruct()    
    {
        // to do: close database
        $this->_database->close();
    }
    
    protected function generatePageHeader($headline = "") 
    {

        // to do: output common beginning of HTML code 
        // including the individual headline
        $headline = htmlspecialchars($headline);
        header("Content-type: text/html; charset=UTF-8");
        
        //echo the head section of the html document.
        echo <<<EOT
        <!DOCTYPE html>
            <html lang='en'>
            <head>
                <title>$headline</title>
                <meta charset='utf-8'>
                <link rel='stylesheet' type='text/css' href=$headline.css>
                <link rel='stylesheet' type='text/css' href='../mainDivStyle.css'>
            </head>
            <body>
                <div class="mainDiv">
EOT;


    }

    protected function generatePageFooter($headline = "") 
    {
        // to do: output common end of HTML code
        echo <<<EOT
        "</div><script src=$headline.js type='text/javascript'> </script></body></html>";
EOT;
    }
    
    protected function processReceivedData() 
    {
        if (get_magic_quotes_gpc()) {
            throw new Exception
                ("Bitte schalten Sie magic_quotes_gpc in php.ini aus!");
        }
    }

    protected function getDB(){
        return $this->_database;
    }

} // end of class

// Zend standard does not like closing php-tag!
// PHP doesn't require the closing tag (it is assumed when the file ends). 
// Not specifying the closing ? >  helps to prevent accidents 
// like additional whitespace which will cause session 
// initialization to fail ("headers already sent"). 
//? >