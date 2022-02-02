<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Podsumowanie zamówienia</title>
    <style>
        table, td {
            border: 1px solid black;
        }
    </style>
</head>
<body>
<?php
    $paczki = $_POST['paczki'];
    $grzebienie = $_POST['grzebienie'];
    $suma = .99*$paczki + 1.29*$grzebienie;

echo<<<END
    <h1>Podsumowanie zamówienia</h1>

    <table>
        <tr>
            <td>Pączek (0,99 PLN/szt)</td>
            <td>$paczki</td>
        </tr>
        <tr>
            <td>Grzebień (1,29 PLN/szt)</td>
            <td>$grzebienie</td>
        </tr>
        <tr>
            <td>SUMA</td>
            <td>$suma PLN</td>
        </tr>
    </table>

        <br/><br/>

    <a href='index.php'>Wróć do piekarni</a>
END;
?>
</body>
</html>