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
            echo'User with this email already exists!';
        } else {
            $sql = "INSERT INTO users (mail, password) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->execute(array($email, $password));

            if ($stmt->rowCount() > 0) {
                echo'1';
            } else {
                echo'Error while inserting data!';
            }
        }
    } else {
        echo'Error empty data';
    }
} else {
    echo'Error request method!';
}
?>
