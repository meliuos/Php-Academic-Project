<?php
include "header.php";
include_once "ConnexionDb.php";

session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    var_dump($_POST);

    // Get username and password from the form
    $mail = $_POST["email"];
    $password = $_POST["password"];
    try {
        $conn = ConnexionBD::getInstance();
        $sql= "SELECT * from users where mail = ? and password = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array($mail, $password));
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        $correctMail = $user["mail"];
        $correctPassword = $user["password"];
    }
    catch (PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }
    // Validate username and password
    if ($mail === $correctMail && $password === $correctPassword) {
        // Authentication successful
        $_SESSION["mail"] = $mail;
        $_SESSION["isAdmin"]=$user["admin"];
        echo json_encode(["success" => true, "message" => "Login successful"]);
    } else {
        // Authentication failed
        echo json_encode(["success" => false, "message" => "Invalid E-mail or password"]);
    }
}
?>
