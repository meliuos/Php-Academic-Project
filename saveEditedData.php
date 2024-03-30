<?php
include "header.php";
include_once "ConnexionDb.php";
session_start();
$sql = "UPDATE your_table 
        SET 
            title = :title, 
            description = :description, 
            price = :price, 
            coverImg = :coverImg, 
            location = :location, 
            openSpots = :openSpots 
        WHERE 
            id = :id";

try {
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $_POST['id']); // Assuming you are sending the ID along with edited data
    $stmt->bindParam(':title', $_POST['title']);
    $stmt->bindParam(':description', $_POST['description']);
    $stmt->bindParam(':price', $_POST['price']);
    $stmt->bindParam(':coverImg', $_POST['coverImg']);
    $stmt->bindParam(':location', $_POST['location']);
    $stmt->bindParam(':openSpots', $_POST['openSpots']);
    $stmt->execute();

    // Return success response
    echo json_encode(array("success" => true));
} catch (PDOException $e) {
    // Return error response
    echo json_encode(array("success" => false, "message" => $e->getMessage()));
}
?>
