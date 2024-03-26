<?php
session_start();
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rentaway"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$email = $_POST['email'];
$password = $_POST['password'];

// Check if the email already exists
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(array("error" => "Email already exists"));
} else {
    // Insert the data into the database
    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Successfully registered"));
    } else {
        echo json_encode(array("error" => "Error: " . $sql . "<br>" . $conn->error));
    }
}

$conn->close();
?>
