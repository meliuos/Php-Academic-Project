<?php
include "header.php";
include_once "ConnexionDb.php";

if($_SERVER['REQUEST_METHOD']==="POST"){
    try{
        $json_data = file_get_contents('php://input');
        if(empty($json_data)){
            echo json_encode(["success" => false, "message" => "No data received"]);
            exit();
        }
        $data = json_decode($json_data, true);  
        $conn = ConnexionBD::getInstance();
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO apparts (mail, title, description, price,location, coverImg,openSpots) VALUES (:email, :title, :description, :price, :location, :image,:openSpots)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':title', $data['title']);
        $stmt->bindParam(':description', $data['description']);
        $stmt->bindParam(':price', $data['price']);
        $stmt->bindParam(':location', $data['location']);
        $stmt->bindParam(':image', $data['coverImg']);
        $stmt->bindParam(':openSpots', $data['openSpots']);
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