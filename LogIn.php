<?php
include "header.php";
include_once "ConnexionDb.php";

session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["email"]) && isset($_POST["password"])){
    // Get Email and password from the form
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
        echo json_encode(["success" => false,"message" => "Try again Later"]);
    }
    // Validate username and password
    if ( $user) {
        $_SESSION["isAdmin"]=$user["admin"];
        echo json_encode(["success" => True, "email" => $mail ,"isAdmin" => $user["admin"]]);
    } else {
        // Authentication failed
        echo json_encode(["success" => false,"message" => "User exists with the same Email"]);
    }
}
?>
