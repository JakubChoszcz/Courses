import java.util.Scanner;
import javax.swing.JOptionPane;

import java.util.Iterator;
import java.util.Random;

public class Main {

	public static void main(String[] args) {

//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("What is your name?");
//		String name = scanner.nextLine();
//		
//		System.out.println("How old are you?");
//		int age = scanner.nextInt();
//		
//		scanner.nextLine();
//		System.out.println("What is your fav food?");
//		String food = scanner.nextLine();
//		
//		System.out.println("Hello " + name);
//		System.out.println("You are "+ age + " years old");
//		System.out.println("You like " + food);
		
		// ================================
		
//		double friends = 10;
//		
//		friends = friends / 3;
//		
//		System.out.println(friends);
		
		// ================================
		
//		String name = JOptionPane.showInputDialog("Enter your name");
//		JOptionPane.showMessageDialog(null, "Hello " + name);
//		
//		int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your age"));
//		JOptionPane.showMessageDialog(null, "Your are " + age + " years old");
//		
//		double height = Double.parseDouble(JOptionPane.showInputDialog("Enter your height"));
//		JOptionPane.showMessageDialog(null, "Your are " + height + "cm tall");
		
		// ================================
		
//		double x;
//		double y;
//		double z;
//		
//		Scanner scanner = new Scanner(System.in);
//
//		System.out.println("Enter side x: ");
//		x = scanner.nextDouble();		
//		System.out.println("Enter side y: ");
//		y = scanner.nextDouble();		
//		
//		z = Math.sqrt((x*x)+(y*y));
//		
//		
//		System.out.println("The hypotenuse is : " + z);
//		
//		scanner.close();
		
		// ================================
		
//		Random random = new Random();
//		
//		int x = random.nextInt(6)+1;
//		double y = random.nextDouble();
//		boolean z = random.nextBoolean();
//		
//		System.out.println(z);
		
		// ================================
		
//		int age = 43;
//		
//		if (age >= 75) {
//			System.out.println("Ok Boomer!");
//		} else if (age >= 18) {
//			System.out.println("You are an adult!");
//		} else if (age >= 13) {
//			System.out.println("You are a teenager!");
//		} else {
//			System.out.println("You are not an adult!");
//		}
		
		// ================================
		
//		String day = "Friday";
//		
//		switch(day) {
//			case "Sunday": System.out.println("It's Sunday!");
//			break;
//			case "Monday": System.out.println("It's Monday!");
//			break;
//			case "Tuesday": System.out.println("It's Tuesday!");
//			break;
//			case "Wednesday": System.out.println("It's Wednesday!");
//			break;
//			case "Friday": System.out.println("It's Friday!");
//			break;
//			default: System.out.println("This is not a day!");
//		}
		
		// ================================
		
//		int temp = 19;
//		
//		if (temp > 30) {
//			System.out.println("It is hot outside");
//		} else if (temp >= 20 && temp <= 30) {
//			System.out.println("It is warm outside");
//		} else {
//			System.out.println("It is cold outside");
//		}
//		
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("You are playing a game! Press q or Q to quit");
//		String response = scanner.next();
//		
//		if (response.equals("q") || response.equals("Q")) {
//			System.out.println("You quit the game");
//		} else {
//			System.out.println("You are still playing the game *pew pew*");
//		}
//		
//		if (!response.equals("q") && !response.equals("Q")) {
//			System.out.println("You are still playing the game *pew pew*");
//		} else {
//			System.out.println("You quit the game");
//		}
		
		// ================================
		
//		Scanner scanner = new Scanner(System.in);
//		String name = "";
//		
//		while (name.isBlank()) {
//			System.out.println("Enter your name: ");
//			name = scanner.nextLine();
//		}
//	
//		do {
//			System.out.println("Enter your name: ");
//			name = scanner.nextLine();
//		} while (name.isBlank());
//		
//		System.out.println("Hello " + name);
		
		// ================================
		
//		for (int i = 10; i >= 0 ; i--) {
//			System.out.println(i);
//		}
//		
//		System.out.println("Happy New Year!");
		
		// ================================
		
//		Scanner scanner = new Scanner(System.in);
//		int rows;
//		int columns;
//		String symbol = "";
//
//		System.out.println("Enter # of rows: ");
//		rows = scanner.nextInt();
//		
//		System.out.println("Enter # of columns: ");
//		columns = scanner.nextInt();
//		
//		System.out.println("Enter symbol to use: ");
//		symbol = scanner.next();
//		
//		for (int i = 1; i <= rows; i++) {
//			System.out.println();
//			
//			for (int j = 1; j <= columns; j++) {
//				System.out.print(symbol);
//			}
//		}
		
		// ================================
		
//		String[] cars = {"Camaro", "Corvette", "Tesla", "BMW"};
//		
//		cars[0] = "Mustang";
//		
//		String[] cars = new String[3];
//		
//		cars[0] = "Camaro";
//		cars[1] = "Corvette";
//		cars[2] = "Tesla";
//		
//		for (int i = 0; i < cars.length ; i++) {
//			System.out.println(cars[i]);
//		}
		
		// ================================
		
//		String[][] cars = new String[3][3];
//
//		cars[0][0] = "Camaro";
//		cars[0][1] = "Corvette";
//		cars[0][2] = "Silverado";
//		cars[1][0] = "Mustang";
//		cars[1][1] = "Ranger";
//		cars[1][2] = "F-150";
//		cars[2][0] = "Ferrari";
//		cars[2][1] = "Lambo";
//		cars[2][2] = "Tesla";
//		
//		String[][] cars = {
//			{"Camaro", "Corvette", "Silverado"},
//			{"Mustang", "Ranger", "F-150"},
//			{"Ferrari", "Lambo", "Tesla"},
//		};
//		
//		for (int i = 0; i < cars.length; i++) {
//			System.out.println();
//			
//			for (int j = 0; j < cars[i].length; j++) {
//				System.out.print(cars[i][j] + " ");
//			}
//		}
		
		// ================================
		
//		String name = "Jakub Choszcz";
//
//		boolean result = name.equalsIgnoreCase("jakub");
//		int result = name.length();
//		char result = name.charAt(1);
//		int result = name.indexOf("u");
//		boolean result = name.isEmpty();
//		String result = name.toUpperCase();
//		String result = name.toLowerCase();
//		String result = name.trim();
//		String result = name.replace("u", "U");
//		
//		System.out.println(result);
		
		// ================================
		
		Boolean a = true;
		Character b = '@';
		Integer c = 123;
		Double d = 3.14;
		String e = "Jakub";
		
		if (a == true) {
			System.out.println("This is true");
		}
		
		// ================================
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
}