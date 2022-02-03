<?php
    session_start();

    if (!isset($_SESSION['udanarejestracja'])) {
        header('Location: index.php');
        exit();
    } else {
        unset($_SESSION['udanarejestracja']);
    }

    // Usuwanie zmiennych walidacyjnych
    if ($_SESSION['fr_nick']) {
        unset($_SESSION['fr_nick']);
    }

    if ($_SESSION['fr_email']) {
        unset($_SESSION['fr_email']);
    }

    if ($_SESSION['fr_haslo1']) {
        unset($_SESSION['fr_haslo1']);
    }

    if ($_SESSION['fr_haslo2']) {
        unset($_SESSION['fr_haslo2']);
    }

    if ($_SESSION['fr_regulamin']) {
        unset($_SESSION['fr_regulamin']);
    }


    // Usuwanie bledow rejestracji
    if ($_SESSION['e_nick']) {
        unset($_SESSION['e_nick']);
    }

    if ($_SESSION['e_email']) {
        unset($_SESSION['e_email']);
    }

    if ($_SESSION['e_haslo1']) {
        unset($_SESSION['e_haslo1']);
    }

    if ($_SESSION['e_regulamin']) {
        unset($_SESSION['e_regulamin']);
    }

    if ($_SESSION['e_bot']) {
        unset($_SESSION['e_bot']);
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
    <h1>Dziękujemy za rejestrację w serwisie! Możesz już zalogować się na swoje konto!</h1>
        
    <a href="zaloguj.php">Zaloguj się na swoje konto!</a>
</body>
</html>