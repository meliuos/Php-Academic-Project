<?php
include "header.php";
include_once "ConnexionDb.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $post_data = file_get_contents("php://input");
    if (!empty($post_data)) {
        $request = json_decode($post_data, true);
        if (isset($request['email'])) {
            $email = $request['email'];
            try {
                $conn = ConnexionBD::getInstance();
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
            echo json_encode(["success" => false, "message" => "Email not provided"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "No data received"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
