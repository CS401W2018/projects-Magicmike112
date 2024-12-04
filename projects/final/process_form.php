<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $order = htmlspecialchars($_POST['order']);
    $pickup = htmlspecialchars($_POST['pickup']);

    // You can process the data, for example, send an email or store it in a database

    // For now, let's just output the submitted data
    echo "Thank you for contacting us, $name!<br>";
    echo "We will reach out to you at $email.<br>";
    echo "Order Inquiry: $order<br>";
    echo "Preferred Pickup Date: $pickup<br>";
} else {
    echo "Form was not submitted properly.";
}
?>
