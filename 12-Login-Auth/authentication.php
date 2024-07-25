<?php
function getStoredCredentials($file) {
    $credentials = [];
    $lines = file($file, FILE_IGNORE_NEW_LINES);
    foreach ($lines as $line) {
        list($username, $password) = explode(":", $line);
        $credentials[$username] = $password;
    }
    return $credentials;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Get stored credentials from file
    $credentials = getStoredCredentials('credentials.txt');

    // Authentication check
    if (isset($credentials[$username]) && $credentials[$username] === $password) {
        echo "<h1>Login Successful</h1>";
        echo "<p>Welcome, " . htmlspecialchars($username) . "!</p>";
    } else {
        echo "<h1>Login Failed</h1>";
        echo "<p>Invalid username or password. Please try again.</p>";
    }
}
?>
