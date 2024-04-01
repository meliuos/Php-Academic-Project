<?php
include "header.php";
include_once "ConnexionDb.php";
session_start();

// Get the JSON data from the request body
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true); // Decode the JSON data into an associative array

if ($data && isset($data['email'])) {
    // Extract data from the associative array
    $email = $data['email'];
    $title = $data['title'];
    $description = $data['description'];
    $price = $data['price'];
    $coverImg = $data['coverImg'];
    $location = $data['location'];
    $openSpots = $data['openSpots'];
    $id = $data['id'];

    // Prepare and execute the SQL query to update the database
    $sql = "UPDATE apparts 
            SET 
                title = :title, 
                description = :description, 
                price = :price, 
                coverImg = :coverImg, 
                location = :location, 
                openSpots = :openSpots 
            WHERE 
                mail = :email and id= :id";

    try {
        $conn = ConnexionBD::getInstance();
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':coverImg', $coverImg);
        $stmt->bindParam(':location', $location);
        $stmt->bindParam(':openSpots', $openSpots);
        $stmt->execute();

        // Return success response
        echo json_encode(array("success" => true));
    } catch (PDOException $e) {
        // Return error response
        echo json_encode(array("success" => false, "message" => $e->getMessage()));
    }
} else {
    // Return error response if email is not provided
    echo json_encode(array("success" => false, "message" => "Email not provided"));
}
?>
