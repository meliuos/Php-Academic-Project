<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include_once "ConnexionDb.php";
    $id=$_GET['id'];
    if(isset($id)){
    try {
     // Create a new PDO instance
    $conn =ConnexionBD::getInstance();
    $sql = "SELECT * FROM apparts WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute(array($id));
    //Fetch the result
    $apartment = $stmt->Fetch(PDO::FETCH_ASSOC);
    if ($apartment) {        
        // Output data as JSON
        header('Content-Type: application/json');
        echo json_encode($apartment);
        
    } else {
        echo 'ERROR 404!';
    }
    }
    catch (PDOException $e){
    echo "Fetching appart failed: " . $e->getMessage();
    }

    }
   
?>