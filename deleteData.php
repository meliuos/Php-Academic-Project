<?php
include "header.php";
include_once "ConnexionDb.php";
try {
    $conn =ConnexionBD::getInstance();
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if(isset($_GET['id'])){
        $id=$_GET['id'];
        $sql = "DELETE FROM apparts WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array($id));
        echo json_encode(["success" => true, "message" => "apart deleted successfully"]);
    }else{
        echo json_encode(["success" => false, "message" => "apart not found"]);
    }
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>