<?php
    session_start();

    if (!isset($_SESSION['zalogowany'])) {
        header('Location: index.php');
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Osadnicy - gra przeglądarkowa</title>
</head>
<body>
    <?php
        echo "<p>Witaj, ".$_SESSION['user']."!<a href='logout.php'>Wyloguj się!</a></p>";
        
        echo "<p><b>Drewno: </b>".$_SESSION['drewno']." ";
        echo "| <b>Kamień: </b>".$_SESSION['kamien']." ";
        echo "| <b>Zboże: </b>".$_SESSION['zboze']."</p>";

        echo "<p><b>E-mail: </b>".$_SESSION['email']."</p>";

        $dataczas = new DateTime('2017-01-01 09:30:15');

        $koniec = DateTime::createFromFormat('Y-m-d H:i:s', $_SESSION['dnipremium']);

        $roznica = $dataczas->diff($koniec);

        if ($dataczas < $koniec) {
            echo "<p><b>Pozostało premium:</b> ".$roznica->format('%y lat, %m mies, %d dni, %h godz, %i min, %s sec')."</p>";
        } else {
            echo "<p><b>Premium nieaktywne od:</b> ".$roznica->format('%y lat, %m mies, %d dni, %h godz, %i min, %s sec')."</p>";
        }
    ?>
</body>
</html>