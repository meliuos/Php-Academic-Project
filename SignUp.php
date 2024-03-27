<?php
include_once "header.php";
include_once "ConnexionDb.php";

session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['email']) && isset($_POST['password'])) {
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    if (!empty($email) && !empty($password)) {
        $conn = ConnexionBD::getInstance();

        $sql = "SELECT * FROM users WHERE mail = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array($email));
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            echo json_encode(array("error" => "Email already exists"));
        } else {
            $sql = "INSERT INTO users (mail, password) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->execute(array($email, $password));

            if ($stmt->rowCount() > 0) {
                echo json_encode(array("message" => "Successfully registered"));
            } else {
                echo json_encode(array("error" => "Error registering user"));
            }
        }
    } else {
        echo json_encode(array("error" => "Incomplete form data"));
    }
} else {
    echo json_encode(array("error" => "Invalid request method"));
}
?>
