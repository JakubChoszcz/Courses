<?php
    session_start();

    if (isset($_POST['email'])) {
        $wszystko_ok = true;

        // Sprawdź nickname
        $nick = $_POST['nick'];
        
        if (strlen($nick) < 3 || strlen($nick) > 20) {
            $wszystko_ok = false;
            $_SESSION['e_nick'] = "Nick musi posiadać od 3 do 20 znaków!";
        }

        if (ctype_alnum($nick) == false) {
            $wszystko_ok = false;
            $_SESSION['e_nick'] = "Nick składać się może tylko z liter i cyfr (bez polskich znaków)!";
        }





        // Sprawdź email
        $email = $_POST['email'];

        $emailB = filter_var($email, FILTER_SANITIZE_EMAIL);

        if (filter_var($emailB, FILTER_VALIDATE_EMAIL) == FALSE || $emailB !== $email) {
            $wszystko_ok = false;
            $_SESSION['e_email'] = "Podaj poprawny adres email!";
        }





        // Sprawdź hasło
        $haslo1 = $_POST['haslo1'];
        $haslo2 = $_POST['haslo2'];

        if (strlen($haslo1) < 8 || strlen($haslo1) > 20) {
            $wszystko_ok = false;
            $_SESSION['e_haslo'] = "Hasło musi posiadać od 8 do 20 znaków!";
        }

        if ($haslo1 != $haslo2) {
            $wszystko_ok = false;
            $_SESSION['e_haslo'] = "Hasła muszą być takie same!";
        }

        $haslo_hash = password_hash($haslo1, PASSWORD_DEFAULT);




        
        // Sprawdź regulamin
        if (!isset($_POST['regulamin'])) {
            $wszystko_ok = false;
            $_SESSION['e_regulamin'] = "Zaakceptuj regulamin!";
        }





        // Sprawdz reCAPTCHA
        $secret = "6LfrwlIeAAAAAJxZx08gIai69oJBdAMb01GoEBhl";
        
        $sprawdz = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);

        $res = json_decode($sprawdz);

        if ($res->success == false) {
            $wszystko_ok = false;
            $_SESSION['e_bot'] = "Potwierdź, że nie jesteś botem!";
        }





        // Zapamiętywanie danych
        $_SESSION['fr_nick'] = $nick;
        $_SESSION['fr_email'] = $email;
        $_SESSION['fr_haslo1'] = $haslo1;
        $_SESSION['fr_haslo2'] = $haslo2;
        if (isset($_POST['regulamin'])) $_SESSION['fr_regulamin'] = true;




        // Sprawdzenie w DB
        require_once "connect.php";
        mysqli_report(MYSQLI_REPORT_STRICT);

        try {
            $polaczenie = new mysqli($host, $db_user, $db_password, $db_name);

            if ($polaczenie->connect_error != 0) {
                throw new Exception(mysqli_connect_errno());
            } else {
                // Sprawdzenie email
                $result = $polaczenie->query("SELECT id FROM uzytkownicy WHERE email = '$email'");

                if (!$result) {
                    throw new Exception($polaczenie->error);
                }

                $mailCount = $result->num_rows;

                if ($mailCount > 0) {
                    $wszystko_ok = false;
                    $_SESSION['e_email'] = "Istnieje już konto przypisane do tego maila!";
                }





                // Sprawdzenie nick
                $result = $polaczenie->query("SELECT id FROM uzytkownicy WHERE user = '$nick'");

                if (!$result) {
                    throw new Exception($polaczenie->error);
                }

                $nickCount = $result->num_rows;

                if ($nickCount > 0) {
                    $wszystko_ok = false;
                    $_SESSION['e_nick'] = "Istnieje już konto o takim nicku, wybierz inny!";
                }





                if ($wszystko_ok) {
                    if ($polaczenie->query("INSERT INTO uzytkownicy VALUES(NULL, '$nick', '$haslo_hash', '$email', 100, 100, 100, now() + INTERVAL 14 DAY)")) {
                        $_SESSION['udanarejestracja'] = true;
                        header('Location: witamy.php');
                    } else {
                        throw new Exception($polaczenie->error);
                    }
                }

                $polaczenie->close();
            }
        } catch (Exception $err) {
            echo '<span style="color: red" >Błąd serwera!</span>';

            echo  "<br/> Informacja Developerska: $err";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Osadnicy - załóż darmowe konto!</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <style>
        .error {
            color: red;
            margin: 10px auto;
        }
    </style>
</head>
<body>
    <form method="post">
        Nickname: <br/> 
        <input 
            type="text" 
            name="nick"
            value="<?php
                if (isset($_SESSION['fr_nick'])) {
                    echo $_SESSION['fr_nick'];
                    unset($_SESSION['fr_nick']);
                }
            ?>"
        /><br/>

<?php
    if (isset($_SESSION['e_nick'])) {
        echo "<div class='error'>".$_SESSION['e_nick']."</div>";
        unset($_SESSION['e_nick']);
    }
?>

        E-mail: <br/> 
        <input 
            type="email" 
            name="email"
            value="<?php
                if (isset($_SESSION['fr_email'])) {
                    echo $_SESSION['fr_email'];
                    unset($_SESSION['fr_email']);
                }
            ?>"
        /><br/>

<?php
    if (isset($_SESSION['e_email'])) {
        echo "<div class='error'>".$_SESSION['e_email']."</div>";
        unset($_SESSION['e_email']);
    }
?>
            
        Twoje hasło: <br/> 
        <input 
            type="password" 
            name="haslo1"
            value="<?php
                if (isset($_SESSION['fr_haslo1'])) {
                    echo $_SESSION['fr_haslo1'];
                    unset($_SESSION['fr_haslo1']);
                }
            ?>"
        /><br/>

<?php
    if (isset($_SESSION['e_haslo'])) {
        echo "<div class='error'>".$_SESSION['e_haslo']."</div>";
        unset($_SESSION['e_haslo']);
    }
?>
        Powtórz hasło: <br/> 
        <input 
            type="password" 
            name="haslo2"
            value="<?php
                if (isset($_SESSION['fr_haslo2'])) {
                    echo $_SESSION['fr_haslo2'];
                    unset($_SESSION['fr_haslo2']);
                }
            ?>"
        /><br/>

        <label>
            <input 
                type="checkbox" 
                name="regulamin"
                <?php
                    if (isset($_SESSION['fr_regulamin'])) {
                        echo "checked";
                        unset($_SESSION['fr_regulamin']);
                    }
                ?>
            /> Akceptuję regulamin
        </label>

<?php
    if (isset($_SESSION['e_regulamin'])) {
        echo "<div class='error'>".$_SESSION['e_regulamin']."</div>";
        unset($_SESSION['e_regulamin']);
    }
?>

        <div class="g-recaptcha" data-sitekey="6LfrwlIeAAAAAGHSUYujgUXyVe8-wdi0yE-KtY1S"></div><br/>

<?php
    if (isset($_SESSION['e_bot'])) {
        echo "<div class='error'>".$_SESSION['e_bot']."</div>";
        unset($_SESSION['e_bot']);
    }
?>

        <input type="submit" value="Stwórz konto"/>
    </form>
</body>
</html>