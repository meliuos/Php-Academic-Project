<?php
include "header.php";
include_once "ConnexionDb.php";
try {
    $conn =ConnexionBD::getInstance();
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if(isset($_GET['id'])){
        $id=$_GET['id'];
        $sql = "DELETE FROM users WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array($id));
        echo json_encode(["success" => true, "message" => "User deleted successfully"]);
    }else{
        echo json_encode(["success" => false, "message" => "User not found"]);
    }
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}