<?php
include "header.php";
include_once "ConnexionDb.php";
session_start();
if(isset($_SESSION["email"])){
    try{
        $conn = ConnexionBD::getInstance();
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO apparts (mail, title, description, price, coverImg) VALUES (:email, :title, :description, :price, :location, :image)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $_POST['email']);
        $stmt->bindParam(':title', $_POST['title']);
        $stmt->bindParam(':description', $_POST['description']);
        $stmt->bindParam(':price', $_POST['price']);
        $stmt->bindParam(':location', $_POST['location']);
        $stmt->bindParam(':image', $_POST['image']);
        $stmt->execute();
        if($stmt->rowCount() == 0){
            echo json_encode(["success" => false, "message" => "Data not added"]);
        }
        else {
            header('Content-Type: application/json');
            echo json_encode(["success" => true, "message" => "Data added successfully"]);
        }
        
    } catch(PDOException $e) {
        echo json_encode(["success" => false, "message" => "Connection failed: " . $e->getMessage()]);
    }
}
else {
    echo json_encode(["success" => false, "message" => "Not logged in"]);
}