<?php
include "header.php";
session_start();
if(isset($_SESSION['isAdmin']) && $_SESSION['isAdmin'] == 1){
    echo json_encode(["success" => true, "message" => "You are an admin"]);
}
else {
    echo json_encode(["success" => false, "message" => "You are not an admin"]);
}
?>