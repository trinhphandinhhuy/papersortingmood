<?php

  $message = $_POST['message'];
  $from = "Support Form";
  $to = "contact@papersortingmood.xyz";
  $subject = "Message from supporters";
  $body = "Message: \n $message";

  if(!$message){
    $errMessage = "You have no song?";
  }

  if(mail($to,$subject,$body,$from)){
    $result = "Thank you for your support!";
    echo $result;
  }else {
    $result = "There has to be an error, try again!";
    echo $result;
  }

?>
