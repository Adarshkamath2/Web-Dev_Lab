<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mes = $_POST['mes'];

    $file = fopen("test.txt", "w");
    fwrite($file, $text);
    fclose($file);

    echo "<h2>Form Data:</h2>";
    echo "<p>Message: $mes</p>";
    }
?>
</body>
</html>

<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mes = $_POST['mes'];

    $file = fopen("test.txt", "w");
    fwrite($file, $text);
    fclose($file);

    echo "<h2>Form Data:</h2>";
    echo "<p>Message: $mes</p>";
    }
?>