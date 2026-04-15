<?php
// 1. Connection Settings
$host = "localhost";
$user = "root";
$pass = ""; 
$db   = "vimel_travels";

// 2. Connect to Database
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 3. Process the Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Kinukuha ang data galing sa HTML
    $fullname = mysqli_real_escape_string($conn, $_POST['name']); 
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $destination = mysqli_real_escape_string($conn, $_POST['destination']);

    // 4. INSERT command
    $sql = "INSERT INTO bookings (fullname, email, destination) VALUES ('$fullname', '$email', '$destination')";

    if ($conn->query($sql) === TRUE) {
        echo "<h1>Booking Successful!</h1>";
        echo "<p>Salamat, $fullname! Nakalista na ang trip mo sa $destination.</p>";
        echo "<a href='index.html'>Bumalik sa Home</a>";
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
?>