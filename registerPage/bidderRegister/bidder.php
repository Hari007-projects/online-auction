<?php
// Retrieve the form data
$email = $_POST['email'];
$name = $_POST['name'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirmPassword'];
$dateOfBirth = $_POST['dob'];
$formattedDate = date('Y-m-d', strtotime($dateOfBirth));
$district = $_POST['district'];
$address = $_POST['address'];
$mobile = $_POST['mobile'];
$photo = $_POST['photo'];
$aadharFrontPage = $_POST['aadharFrontPage'];
$aadharBackPage = $_POST['aadharBackPage'];

// Create a database connection
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'sellerdata';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Prepare and execute the database insertion query
$sql = "INSERT INTO datafile3 (email, name, password, confirmPassword, dob, district, address, mobile, photo, aadharFrontPage, aadharBackPage) VALUES ('$email', '$name', '$password', '$confirmPassword', '$formattedDate', '$district', '$address', '$mobile', '$photo', '$aadharFrontPage', '$aadharBackPage')";

if ($conn->query($sql) === true) {
    // Data inserted successfully
    echo 'Data stored successfully';
} else {
    // Error occurred during data insertion
    echo 'Error: ' . $sql . '<br>' . $conn->error;
}

$conn->close();
?>
