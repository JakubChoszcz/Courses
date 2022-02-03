<!-- PHP -->
PHP - Personal Home Page => PHP Hypertext Preprocessor

127.0.0.1

X - cross-platform
A - apache
M - mysql
P - php
P - perl

'' - doesn't see variables 
"" - sees variables (stronger)

method = get / post

session life time -> php.ini => session.gc_maxlifetime=1440

<!-- Connect to DB -->
1) MySQL address => $host
2) MySQL login => $db_user
3) MySQL pass => $db_password
4) DB name => $db_name

include / require

<!-- Date in MySQL -->
Format - "YYYY-MM-DD HH:MM:SS" - "Y-m-d H:i:s"




<!-- Time Actions -->
echo time()."<br/>";

echo date("Y-m-d H:i:s")."<br/>";

$dataczas = new DateTime();

echo $dataczas->format("Y-m-d H:i:s")."<br/>";

$dzien = "26";
$miesiac = "7";
$rok = "1875";

if (checkdate($miesiac, $dzien, $rok)) {
    echo "Poprawna data";
} else {
    echo "Niepoprawna data";
}




<!-- SQL -->
now() => YYYY:MM:DD HH:MM:SS
curdate() => YYYY:MM:DD
curtime() => HH:MM:SS