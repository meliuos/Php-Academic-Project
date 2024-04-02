<?php
include "header.php";
include_once "ConnexionDb.php";

try {
    $conn =ConnexionBD::getInstance();
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);
    if(isset($data['email']) && isset($data['password'])){
        $email=$data['email'];
        $password=$data['password'];
        $sql = "INSERT INTO users (mail, password, admin) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array($email, $password, 1));
        echo json_encode(["success" => true, "message" => "Admin added successfully"]);
    }else{
        echo json_encode(["success" => false, "message" => "Please try again Later !"]);
    }
} catch(PDOException $e) {
    echo json_encode(["success" => false,"message" => "Connection failed: " . $e->getMessage()]);
}
?>