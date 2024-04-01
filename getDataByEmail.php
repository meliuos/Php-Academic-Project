<?php
include "header.php";
include_once "ConnexionDb.php";

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $post_data = file_get_contents("php://input");

    // Check if data exists
    if (!empty($post_data)) {
        // Decode the JSON data
        $request = json_decode($post_data, true);

        // Check if the email field exists in the request
        if (isset($request['email'])) {
            // Retrieve the email from the request
            $email = $request['email'];

            // Now you can use the $email variable for further processing
            // For example, perform database operations using the email
            try {
                $conn = ConnexionBD::getInstance();
                // Set PDO error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $sql = "SELECT * FROM apparts WHERE mail = :email";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':email', $email);
                $stmt->execute();
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                header('Content-Type: application/json');
                echo json_encode($data);
            } catch(PDOException $e) {
                echo json_encode(["success" => false, "message" => "Connection failed: " . $e->getMessage()]);
            }
        } else {
            // If the email field is not provided in the request
            echo json_encode(["success" => false, "message" => "Email not provided"]);
        }
    } else {
        // If the POST data is empty
        echo json_encode(["success" => false, "message" => "No data received"]);
    }
} else {
    // If the request method is not POST
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
