<?php
include "header.php";
include_once "ConnexionDb.php";
try {
    $conn =ConnexionBD::getInstance();
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT * FROM users where admin!=1";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($data);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}