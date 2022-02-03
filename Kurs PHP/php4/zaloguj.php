<?php
    session_start();
    
    if (!isset($_POST['login']) || !isset($_POST['haslo'])) {
        header('Location: index.php');
        exit();
    }

    require_once "connect.php";

    try {
        $polaczenie = new mysqli($host, $db_user, $db_password, $db_name);
    
        if ($polaczenie->connect_error != 0) {
            throw new Exception($polaczenie->connect_error);
        } else {
            $login = $_POST['login'];
            $haslo = $_POST['haslo'];
    
            $login = htmlentities($login, ENT_QUOTES, "UTF-8");
    
            if ($result = $polaczenie->query(sprintf(
                "SELECT * FROM uzytkownicy WHERE user = '%s'", 
                mysqli_real_escape_string($polaczenie, $login)
            ))) {
                $users = $result->num_rows;
    
                if ($users > 0) {
                    $wiersz = $result->fetch_assoc();
    
                    if (password_verify($haslo, $wiersz['pass'])) {
                        $_SESSION['zalogowany'] = true;
                        $_SESSION['id'] = $wiersz['id'];
        
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
                } else {
                    $_SESSION['blad'] = '<span style="color: red">Nieprawidłowy login lub hasło!</span>';
    
                    header('Location: index.php');
                }
            } else {
                throw new Exception($polaczenie->error);
            }
    
            $polaczenie->close();
        }
    } catch (Exception $err) {
        echo "Błąd Developerski: $err";
    }
?>