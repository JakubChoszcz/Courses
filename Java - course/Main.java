package pl.choszcz;

import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);

//        System.out.println("Podaj imię:");
//        String name = scanner.nextLine();
//        System.out.println("Czesc " + name + "!");

//        ================================================================

//        if (!name.isEmpty() && (!name.endsWith("a") || name.equals("Barnaba"))) {
//            System.out.println("Jesteś mężczyzną!");
//        } else if (!name.isEmpty() && name.endsWith("a")) {
//            System.out.println("Jesteś kobietą!");
//        } else {
//            System.out.println("Podaj imię, imię nie może być puste!");
//        }

//        ================================================================

//        System.out.println("Podaj swój wiek:");
//        int age = scanner.nextInt();
//
//        if (age >= 18) {
//            System.out.println("Jesteś pełnoletni.");
//        } else {
//            System.out.println("Jesteś niepełnoletni.");
//        }

//        ================================================================

//        String firstName = "Jakub";
//        String lastName = "Choszcz";
//
//        System.out.println(firstName + " " + lastName);

//        ================================================================

//        int a = 2, b = 3;
//
//        System.out.println(a > b);
//        System.out.println(a < b);
//        System.out.println(a == b);
//        System.out.println(a != b);

//        ================================================================

//        boolean isSkyBlue = true;
//
//        if (isSkyBlue) {
//            System.out.println("Niebo jest niebieskie.");
//        } else {
//            System.out.println("Niebo nie jest niebieskie.");
//        }

//        ================================================================

//        for (int i = 0; i <= 10; i++) {
//            System.out.println(i);
//        }

//        int j = 0;

//        while (j <= 10) {
//            System.out.println(j);
//            j++;
//        }

//        do {
//            System.out.println(j);
//            j++;
//        } while (j < 10);

//        for (int i = 0; i <= 10; i++) {
//            if (i == 4) {
//                continue;
//            } else if (i == 8) {
//                break;
//            }
//
//            System.out.println(i);
//        }

//        ================================================================

//        for (int i = 1; i <= 100; i++) {
//            if (i % 15 == 0) {
//                System.out.println("FizzBuzz");
//            } else if (i % 3 == 0) {
//                System.out.println("Fizz");
//            } else if (i % 5 == 0) {
//                System.out.println("Buzz");
//            } else {
//                System.out.println(i);
//            }
//        }

//        ================================================================

        Random random = new Random();
        int numberToGuess = random.nextInt(100) + 1;

        Scanner scanner = new Scanner(System.in);

        boolean wasNumberGuessed = false;

        while (!wasNumberGuessed) {
            System.out.println("Podaj liczbę:");
            int userNumber = scanner.nextInt();

            if (userNumber < numberToGuess) {
                System.out.println("Liczba jest za mała!");
            } else if (userNumber > numberToGuess) {
                System.out.println("Liczba jest za duża!");
            } else {
                System.out.println("Brawo! Udało Ci się odgadnąć liczbę!");
                wasNumberGuessed = true;
            }
        }
    }
}
