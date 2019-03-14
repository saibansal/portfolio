<?php
include "imemail.inc.php";
$txtData = "";
$htmData = "";
$txtData .= "Name: " . $_POST["name"] . "\r\n";
$htmData .= "<tr><td width=\"25%\" bgcolor=\"#EEEEEE\"><b>Name:</b></td><td bgcolor=\"#EEEEEE\">" . $_POST["name"] . "</td></tr>";
$csvData .= $_POST["name"] . ";";
$txtData .= "Email Id: " . $_POST["eid"] . "\r\n";
$htmData .= "<tr><td width=\"25%\"><b>Email Id :</b></td><td>" . $_POST["eid"] . "</td></tr>";
$csvData .= $_POST["eid"] . ";";
$txtData .= "City: " . $_POST["city"] . "\r\n";
$htmData .= "<tr><td width=\"25%\" bgcolor=\"#EEEEEE\"><b>City:</b></td><td bgcolor=\"#EEEEEE\">" . $_POST["city"] . "</td></tr>";
$csvData .= $_POST["city"] . ";";
$txtData .= "City: " . $_POST["number"] . "\r\n";
$htmData .= "<tr><td width=\"25%\" bgcolor=\"#EEEEEE\"><b>Mobile Number:</b></td><td bgcolor=\"#EEEEEE\">" . $_POST["number"] . "</td></tr>";
$csvData .= $_POST["number"] . ";";

// Template
$htmHead = "<table width=\"90%\" border=\"0\" bgcolor=\"#FFFFFF\" cellpadding=\"4\" style=\"font: 11px Tahoma; color: #000000; border: 1px solid #BBBBBB;\">";
$htmFoot = "</table>";

//Send email to owner
$txtMsg = "";
$htmMsg = $htmHead . "<tr><td></td></tr>" . $htmFoot;
$oEmail = new imEMail(($imForceSender ? $_POST["Itm_8_00_9"] : "operator.sukhinath@saisachkhoj.com"),"operator.sukhinath@saisachkhoj.com","user wants SMS from Sri Sai Vaani SMS Channel","iso-8859-1");
//$oEmail = new imEMail(($imForceSender ? $_POST["eid"] : "operator.sukhinath@saisachkhoj.com"),"operator.sukhinath@saisachkhoj.com","","iso-8859-1");
$oEmail->setText($txtMsg . "\r\n\r\n" . $txtData);
$oEmail->setHTML("<html><body bgcolor=\"#063A69\"><center>" . $htmMsg . "<br>" . $htmHead . $htmData . $htmFoot . "</center></body></html>");
$oEmail->send();
@header("Location: thx.html");
?>
