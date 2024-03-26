<?php
session_start();
if (isset($_SESSION['mail'])) {
    echo json_encode(["success" => true, "message" => "Logged in successful"]);
}
else {
    echo json_encode(["success" => false, "message" => "Not logged in"]);
}?>