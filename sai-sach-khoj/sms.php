<?php
include "imemail.inc.php";
//Form Data
$txtData = "";
$htmData = "";
$txtData .= "User Name: " . $_POST["name"] . "\r\n";
$htmData .= "<tr><td width=\"25%\"><b>Name:</b></td><td>" . $_POST["name"] . "</td></tr>";

$txtData .= "Email Id: " . $_POST["eid"] . "\r\n";
$htmData .= "<tr><td width=\"25%\" bgcolor=\"#EEEEEE\"><b>Email Id:</b></td><td bgcolor=\"#EEEEEE\">" . $_POST["eid"] . "</td></tr>";

$txtData .= "City: " . $_POST["city"] . "\r\n";
$htmData .= "<tr><td width=\"25%\"><b>City:</b></td><td>" . $_POST["city"] . "</td></tr>";

$txtData .= "Subject: " . $_POST["number"] . "\r\n";
$htmData .= "<tr><td width=\"25%\"><b>Mobile Number:</b></td><td>" . $_POST["number"] . "</td></tr>";
// Template
$htmHead = "<table width=\"90%\" border=\"0\" bgcolor=\"#FFFFFF\" cellpadding=\"4\" style=\"font: 11px Tahoma; color: #000000; border: 1px solid #BBBBBB;\">";
$htmFoot = "</table>";

//Send email to owner
$txtMsg = "";
$htmMsg = $htmHead . "<tr><td></td></tr>" . $htmFoot;
$oEmail = new imEMail(($imForceSender ? $_POST["eid"] : "operator.sukhinath@saisachkhoj.com"),"operator.sukhinath@saisachkhoj.com","","iso-8859-1");
$oEmail->setText($txtMsg . "\r\n\r\n" . $txtData);
$oEmail->setHTML("<html><body bgcolor=\"#063A69\"><center>" . $htmMsg . "<br>" . $htmHead . $htmData . $htmFoot . "</center></body></html>");
$oEmail->send();

//Send email to user
//$txtMsg = "Dear \r\n Thanks you  for contact with us and our concern team will contact with you shortly. \r\n\r\n\r\nWith Warm Regds\r\nTeam Creation \r\n International Call Center";
//$htmMsg = $htmHead . "<tr><td>Dear<br>Thanks you  for contact with us and our concern team will contact with you shortly. <br><br><br>With Warm Regds<br>Team Creation <br>International Call Center</td></tr>" . $htmFoot;
//$oEmail = new imEMail("ashish@saisachkhoj.com",$_POST["eid"],"Thank You !","iso-8859-1");
//$oEmail->setText($txtMsg . "\r\n\r\n" . $txtData);
//$oEmail->setHTML("<html><body bgcolor=\"#063A69\"><center>" . $htmMsg . "<br>" . $htmHead . $htmData . $htmFoot . "</center></body></html>");
//$oEmail->send();
@header("Location:http://www.saisachkhoj.com");
?>