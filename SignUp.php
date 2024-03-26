<?php
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get username and password from the form
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // For demonstration purposes, let's assume we're just echoing the received data
    echo json_encode(["success" => true, "message" => "Signup successful", "username" => $username]);
}
?>
