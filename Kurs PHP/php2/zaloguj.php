<?php
    session_start();
    
    if (!isset($_POST['login']) || !isset($_POST['haslo'])) {
        header('Location: index.php');
        exit();
    }

    require_once "connect.php";

    $polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);

    if ($polaczenie->connect_errno!=0) {
        echo "Erorr: ".$polaczenie->connect_errno;
    } else {
        $login = $_POST['login'];
        $haslo = $_POST['haslo'];

        $login = htmlentities($login, ENT_QUOTES, "UTF-8");
        $haslo = htmlentities($haslo, ENT_QUOTES, "UTF-8");

        // $sql = ;

        if ($result = @$polaczenie->query(sprintf(
            "SELECT * FROM uzytkownicy WHERE user = '%s' AND pass = '%s';", 
            mysqli_real_escape_string($polaczenie, $login),
            mysqli_real_escape_string($polaczenie, $haslo)
        ))) {
            $users = $result->num_rows;

            if ($users > 0) {
                $_SESSION['zalogowany'] = true;
                $_SESSION['id'] = $wiersz['id'];

                $wiersz = $result->fetch_assoc();

                $_SESSION['user'] = $wiersz['user'];
                $_SESSION['drewno'] = $wiersz['drewno'];
                $_SESSION['kamien'] = $wiersz['kamien'];
                $_SESSION['zboze'] = $wiersz['zboze'];
                $_SESSION['email'] = $wiersz['email'];
                $_SESSION['dnipremium'] = $wiersz['dnipremium'];

                unset($_SESSION['blad']);
                $result->close();

                header('Location: gra.php');
            } else {
                $_SESSION['blad'] = '<span style="color: red">Nieprawidłowy login lub hasło!</span>';

                header('Location: index.php');
            }
        }

        $polaczenie->close();
    }
?>