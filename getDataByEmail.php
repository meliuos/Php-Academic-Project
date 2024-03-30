<?php
include "header.php";
include_once "ConnexionDb.php";
session_start();
if (isset($_SESSION['email'])) {
    $email = $_SESSION['email'];
    try {
        $conn = ConnexionBD::getInstance();
        
        // Set PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT * FROM apparts WHERE email = :email";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        header('Content-Type: application/json');
        echo json_encode($data);
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}
else {
    echo json_encode(["success" => false, "message" => "Not logged in"]);
}