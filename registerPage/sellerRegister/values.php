


 <?php

// Retrieve the form data
$email = $_POST['email'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirmPassword'];
$dateOfBirth= $_POST['dob'];
$formattedDate = date('Y-m-d', strtotime($dateOfBirth));
$name = $_POST['name'];
$district = $_POST['district'];
$address = $_POST['address'];
$mobile = $_POST['mobile'];
$panCard = $_POST['panCard'];
$bankPassbook = $_POST['bankPassbook'];
$photo = $_POST['photo'];
$aadharFrontPage = $_POST['aadharFrontPage'];
$aadharBackPage = $_POST['aadharBackPage'];

// Retrieve other form fields here

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
$sql = "INSERT INTO datafile2 (email,name, password,confirmPassword,	dob,district,address,mobile,panCard,bankPassbook,photo,aadharFrontPage,aadharBackPage) VALUES ('$email','$name', '$password','$confirmPassword','$formattedDate','$district','$address','$mobile','$panCard','$bankPassbook','$photo','$aadharFrontPage','$aadharBackPage')";
// Replace 'your_table_name' with the actual table name where you want to store the data

if ($conn->query($sql) === true) {
  // Data inserted successfully
  echo 'Data stored successfully';
} else {
  // Error occurred during data insertion
  echo 'Error: ' . $sql . '<br>' . $conn->error;
}

$conn->close();


?>


<!-- // Establish a database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sellerdata";

$conn = new mysqli($servername, $username, $password, $dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data from the AJAX request
$email = $_POST['email'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
$name = $_POST['name'];
$date = $_POST['date'];
$district = $_POST['district'];
$address = $_POST['address'];
$mobile = $_POST['mobile'];

// Insert data into the database
$sql = "INSERT INTO datafile (email, password, cpassword, name, date, district, address, mobile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssss", $email, $password, $cpassword, $name, $date, $district, $address, $mobile);
$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$cpassword = isset($_POST['cpassword']) ? $_POST['cpassword'] : '';
$name = isset($_POST['name']) ? $_POST['name'] : '';
$date = isset($_POST['date']) ? $_POST['date'] : '';
$district = isset($_POST['district']) ? $_POST['district'] : '';
$address = isset($_POST['address']) ? $_POST['address'] : '';
$mobile = isset($_POST['mobile']) ? $_POST['mobile'] : '';

 -->





<!-- if ($stmt->execute()) {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';
        $cpassword = $_POST['cpassword'] ?? '';
        $name = $_POST['name'] ?? '';
        $date = $_POST['date'] ?? '';
        $district = $_POST['district'] ?? '';
        $address = $_POST['address'] ?? '';
        $mobile = $_POST['mobile'] ?? '';
    
        // Your database insertion code here
        // ...
        // Make sure to properly sanitize and validate the form data before inserting it into the database
    
        echo "Data inserted successfully.";
    }
    echo "Data inserted successfully.";
} else {
    // Error occurred while inserting data
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
 -->












































<?php
// // require_once('index.php');
//  // servername => localhost
//         // username => root
//         // password => empty
//         // database name => staff
//         $conn = mysqli_connect("localhost", "root", "", "hari");
//         // Check connection
//         if($conn === false){
//             die("ERROR: Could not connect. "
//                 . mysqli_connect_error());
//         }
// $EmailSeller =  $_POST['inputEmailSeller'];
// $PasswordSeller = $_POST['inputPasswordSeller'];
// $FNameSeller = $_POST['inputFNameSeller'];
// $dobSeller = $_POST['inputdobSeller'];
// $NationalitySeller = $_POST['inputNationalitySeller'];
// $AddressSeller = $_POST['inputAddressSeller'];
// $MobileSeller = $_POST['inputMobileSeller'];
// $PhotoSeller = $_POST['inputPhotoSeller'];
// $AFPSeller = $_POST['inputAFPSeller'];
// $ABPSeller = $_POST['inputABPSeller'];
//  // Performing insert query execution
//         // here our table name is college
//         $sql = "INSERT INTO seller VALUES ('$EmailSeller','$PasswordSeller','$FNameSeller','$dobSeller','$NationalitySeller','$AddressSeller','$MobileSeller','$PhotoSeller','$AFPSeller','$ABPSeller')";
        
//         if(mysqli_query($conn, $sql)){
//             echo "HI";
//         } else{
//             echo "ERROR: Hush! Sorry $sql. "
//                 . mysqli_error($conn);
//         }
//         // Close connection
//         // mysqli_close($conn);

      
//         // require_once('index.php');
//         // Establish the database connection
//         $conn = mysqli_connect("localhost", "root", "", "hari");
//         if ($conn === false) {
//             die("ERROR: Could not connect. " . mysqli_connect_error());
//         }
        
//         // Perform the SELECT query
//         $sql = "SELECT * FROM seller";
//         $result = mysqli_query($conn, $sql);
        
//         // Fetch the data and store it in an array
//         $data = array();
//         while ($row = mysqli_fetch_assoc($result)) {
//             $data[] = $row;
//         }
        
//         // Close the connection
//         mysqli_close($conn);
        
//         // Set the response header to JSON
//         header('Content-Type: application/json');
        
//         // Output the data as JSON
//         echo json_encode($data);
        
        



