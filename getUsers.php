<?php
include "header.php";
include_once "ConnexionDb.php";
try {
    // Create a new PDO instance
    $conn =ConnexionBD::getInstance();
    
    // Set PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // SQL query to retrieve data
    $sql = "SELECT * FROM users where admin!=1";
    
    // Prepare statement
    $stmt = $conn->prepare($sql);
    
    // Execute statement
    $stmt->execute();
    
    // Fetch data as associative array
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Output data as JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} catch(PDOException $e) {
    // Handle connection errors
    echo "Connection failed: " . $e->getMessage();
}