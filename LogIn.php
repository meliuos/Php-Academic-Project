<?php
include "header.php";
include_once "ConnexionDb.php";

session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["email"]) && isset($_POST["password"])){
    // Get username and password from the form
    $mail = $_POST["email"];
    $password = $_POST["password"];
    try {
        $conn = ConnexionBD::getInstance();
        $sql= "SELECT * from users where mail = ? and password = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array($mail, $password));
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
    }
    catch (PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }
    // Validate username and password
    if ( $user) {
        // Authentication successful
        $_SESSION["email"] = $mail;
        $_SESSION["isAdmin"]=$user["admin"];
        echo "1";
    } else {
        // Authentication failed
        echo "Invalid E-mail or password";
    }
}
?>
