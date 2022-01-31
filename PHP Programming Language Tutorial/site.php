<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Course</title>
</head>
<body>
    <?php 
        // echo "<h1>Jakub's Site</h1>";
        // echo "<hr>";
        // echo "<p>This is my site</p>";





        // $characterName = "John";
        // $characterAge = 30;

        // echo "There once was a man named $characterName <br>";
        // echo "He was $characterAge years old <br>";
        
        // $characterName = "Mike";

        // echo "He really liked the name $characterName <br>";
        // echo "But didn't like being $characterAge <br>";





        // $phrase = "To be or not to be";
        // $age = 30;
        // $gpa = 3.14;
        // $bool = false;





        // $phrase = "Giraffe Academy";
        //         // 0123456789
        // $phrase[0] = "B";

        // echo str_replace("Giraffe", "Panda", $phrase);

        // echo substr($phrase, 8);
        




        // $num = 10;     
        // echo $num;

        // $num += 12;
        // echo $num;

        // echo abs(-100);
        // echo pow(2, 4);
        // echo sqrt(12);
        // echo max(2, 4);
        // echo max(2, 4);
        // echo round(3.14);
        // echo ceil(3.14);
        // echo floor(3.14);
    ?>





    <!-- <form action="site.php" method="get">
        Name: <input type="text" name="name"/>
        Age: <input type="number" name="age"/>

        <input type="submit"/>
    </form>

        <br/>

    Your name is <?php echo $_GET["name"]; ?>
        <br/>
    Your age is <?php echo $_GET["age"]; ?> -->




    <!-- <form action="site.php" method="get">
        <input type="number" name="num1"/>
        <input type="number" name="num2"/>

        <input type="submit"/>
    </form>

        <br/>

    <?php echo $_GET["num1"] + $_GET["num2"] ?> -->





    <!-- <form action="site.php" method="get">
        Color: <input type="text" name="color"/>
        Plural noun: <input type="text" name="pluralNoun"/>
        Celebrity <input type="text" name="celebrity"/>

        <input type="submit"/>
    </form>

    <?php
        $color = $_GET["color"];
        $pluralNoun = $_GET["pluralNoun"];
        $celebrity = $_GET["celebrity"];

        echo "Roses are $color <br/>";
        echo "$pluralNoun are blue <br/>";
        echo "I love $celebrity <br/>";
    ?> -->





    <!-- <form action="site.php" method="post">
        Password: <input type="password" name="password"/>

        <input type="submit"/>
    </form>

    <?php
        echo $_POST["password"];
    ?> -->





    <!-- <?php
        $friends = array("Mike", "Girrafe", "Konrad", "Krzysztof");
        $friends[4] = "Jakub";

        echo count($friends);
    ?> -->





    <!-- <form action="site.php" method="post">
        Apples: <input type="checkbox" name="fruits[]" value="apples"/><br/>
        Oranges: <input type="checkbox" name="fruits[]" value="oranges"/><br/>
        Pears: <input type="checkbox" name="fruits[]" value="pears"/><br/>

        <input type="submit"/>
    </form>

    <?php
        $fruits = $_POST["fruits"];

        echo $fruits[0];
    ?> -->





    <!-- <form action="site.php" method="post">
        <input type="text" name="student"/>

        <input type="submit"/>
    </form>
    
    <?php
        $grades = array("Jim" => "A+", "Pam" => "B-", "Oscar" => "C+");

        echo $grades[$_POST["student"]];
    ?> -->





    <!-- <?php
        function sayHi($name, $age) {
            echo "Hello $name, you are $age<br/>";
        }

        sayHi("Jakub", 21);
        sayHi("Konrad", 20);
        sayHi("Krzysiek", 19);
    ?> -->





    <!-- <?php
        function cube($num) {
            return $num * $num * $num;
        }

        echo cube(4);
    ?> -->





    <!-- <?php
        $isMale = true;
        $isTall = false;

        if ($isMale && $isTall) {
            echo "You are a tall male";
        } elseif ($isMale && !$isTall) {
            echo "You are a short male";
        } elseif (!$isMale && $isTall) {
            echo "You are not male but are tall";
        } else {
            echo "You are not male and not tall";
        }
    ?> -->





    <!-- <?php
        function getMax($num1, $num2, $num3) {
            if ($num1 >= $num2 && $num2 >= $num3) {
                return $num1;
            } elseif ($num2 >= $num1 && $num2 >= $num3) {
                return $num2;
            } else {
                return $num3;
            }
        }

        echo getMax(9, 5, 7);
    ?> -->





    <!-- <form action="site.php" method="post">
        First Num: <input type="number" step="0.1" name="num1"/><br/>

        OP: <input type="text" name="op"/><br/>

        Second Num: <input type="number" step="0.1" name="num2"/><br/>

        <input type="submit"/>
    </form>

    <?php
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        $op = $_POST["op"];

        if ($op == "+") {
            echo $num1 + $num2;
        } elseif ($op == "-") {
            echo $num1 - $num2;
        } elseif ($op == "*") {
            echo $num1 * $num2;
        } elseif ($op == "/") {
            echo $num1 / $num2;
        } else {
            echo "Invalid Operator";
        }
    ?> -->





    <!-- <form action="site.php" method="post">
        What was your grade?
        <input type="text" name="grade"/>

        <input type="submit"/>
    </form>

    <?php
        $grade = $_POST["grade"];

        switch ($grade) {
            case 'A':
                echo "You did amazing!";
                break;
            
            case 'B':
                echo "You did pretty good";
                break;
        
            case 'C':
                echo "You did poorly";
                break;
        
            case 'D':
                echo "You did very bad";
                break;
        
            case 'F':
                echo "You fail!";
                break;
                        
            default:
                echo "Invalid grade";
                break;
        }
    ?> -->





    <!-- <?php
        $index = 1;

        while ($index <= 5) {
            echo "$index <br/>";
            $index++;
        }

        $index = 1;

        do {
            echo "$index <br/>";
            $index++;
        } while ($index <= 5)
    ?> -->





    <!-- <?php
        $luckyNumbers = array(4, 8, 12, 16, 24);

        for ($i = 0; $i < count($luckyNumbers); $i++) { 
            echo "$luckyNumbers[$i] <br/>";
        }
    ?> -->





    <!-- <?php
        // comment
        echo "Comment are fun!"; // comment

        /*comment
        comment
        comment*/
    ?> -->





    <!-- <?php
        include "header.html";
    ?>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illo consequatur delectus! Aperiam ullam accusantium labore non culpa veritatis. Impedit rem ipsa cumque optio! Quo dicta ad ipsa quaerat. Quisquam!</p>

    <?php
        include "footer.html";
    ?> -->
</body>
</html>