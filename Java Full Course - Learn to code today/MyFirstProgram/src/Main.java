import java.util.Scanner;

import javax.swing.JOptionPane;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Random;

import java.util.*;

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
		
//		Boolean a = true;
//		Character b = '@';
//		Integer c = 123;
//		Double d = 3.14;
//		String e = "Jakub";
//		
//		if (a == true) {
//			System.out.println("This is true");
//		}
		
		// ================================
		
//		ArrayList<String> food = new ArrayList<String>();
//
//		food.add("pizza");
//		food.add("hamburger");
//		food.add("hotdog");
//		
//		food.set(0, "sushi");
//		food.remove(2);
//		food.clear();
//		
//		for (int i = 0; i < food.size(); i++) {
//			System.out.println(food.get(i));
//		}
		
		// ================================

//		ArrayList<ArrayList<String>> groceryList = new ArrayList();
//		
//		ArrayList<String> bakeryList = new ArrayList<String>();
//		bakeryList.add("pasta");
//		bakeryList.add("garlic bread");
//		bakeryList.add("donuts");
//
//		ArrayList<String> produceList = new ArrayList<String>();
//		produceList.add("tomatoes");
//		produceList.add("pepper");
//		produceList.add("zucchini");
//
//		ArrayList<String> drinksList = new ArrayList<String>();
//		drinksList.add("soda");
//		drinksList.add("coffee");
//
//		groceryList.add(bakeryList);
//		groceryList.add(produceList);
//		groceryList.add(drinksList);
//		
//		System.out.println(groceryList.get(0).get(0));
		
		// ================================

//		String[] animals = {"cat", "dog", "rat", "bird"};
//		ArrayList<String> animals = new ArrayList<String>();
//
//		animals.add("cat");
//		animals.add("dog");
//		animals.add("rat");
//		animals.add("bird");
//		
//		for (String i : animals) {
//			System.out.println(i);
//		}
		
		// ================================

//		String name = "Jakub";
//		int age = 21;
//		
//		hello(name, age);
//		
//		int x = 3;
//		int y = 4;
//		
//		int z = add(x, y);
//		
//		System.out.println(z);
		
		// ================================

//		double x = add(1.3, 2.3, 3.3);
//		
//		System.out.println(x);
		
		// ================================
		
//		boolean myBoolean = true;
//		char myChar = '@';
//		String myString = "Jakub";
//		int myInt = 50;
//		double myDouble = 1000;
//
//		System.out.printf("%b", myBoolean);
//		System.out.printf("%c", myChar);
//		System.out.printf("%s", myString);
//		System.out.printf("%d", myInt);
//		System.out.printf("%f", myDouble);
//		
//		System.out.printf("Hello %10s", myString);
//		
//		System.out.printf("You have this much money %.2f", myDouble);
//
//		System.out.printf("You have this much money %20f", myDouble);
//		System.out.printf("You have this much money %+f", myDouble);
//		System.out.printf("You have this much money %020f", myDouble);
//		System.out.printf("You have this much money %,f", myDouble);
		
		// ================================
		
//		final double PI = 3.14159;
//		
//		System.out.println(PI);
		
		// ================================

//		Car myCar1 = new Car();
//		Car myCar2 = new Car();
//
//		System.out.println(myCar1.make);
//		System.out.println(myCar1.model);
//
//		System.out.println(myCar2.make);
//		System.out.println(myCar2.model);
		
		// ================================

//		Human human1 = new Human("Jakub", 21, 60);
//		Human human2 = new Human("Konrad", 20, 70);
//		
//		human1.eat();
//		human2.();
		
		// ================================
		
//		DiceRoller diceRoller = new DiceRoller();
		
		// ================================
		
//		Pizza pizza = new Pizza();
//		
//		System.out.println("Here are the ingridients of your pizza: ");
//		System.out.println(pizza.bread);
//		System.out.println(pizza.sauce);
//		System.out.println(pizza.cheese);
//		System.out.println(pizza.topping);
		
		// ================================
		
//		Car car = new Car();
//		
//		System.out.println(car.toString());
//		System.out.println(car);
		
		// ================================
		
//		Food[] refrigerator = new Food[3];
//
//		Food food1 = new Food("pizza");
//		Food food2 = new Food("hamburger");
//		Food food3 = new Food("hotdog");
//		
//		Food[] refrigerator = {food1, food2, food3};
//
////		refrigerator[0] = food1;
////		refrigerator[1] = food1;
////		refrigerator[2] = food2;
//
//		System.out.println(refrigerator[0].name);
//		System.out.println(refrigerator[1].name);
//		System.out.println(refrigerator[2].name);
		
		// ================================
		
//		Garage garage = new Garage();
//
//		Car car1 = new Car("BMW");
//		Car car2 = new Car("Tesla");
//
//		garage.park(car1);
//		garage.park(car2);
		
		// ================================

//		Friend friend1 = new Friend("Jakub");
//		Friend friend2 = new Friend("Konrad");
//		Friend friend3 = new Friend("Rafał");
//		Friend friend4 = new Friend("Krzysztof");
//		
//		Friend.displayFriends()
		
		// ================================
		
//		Car car = new Car();
//		
//		car.go();
//		
//		Bicycle bike = new Bicycle();
//		
//		bike.stop();
//
//		System.out.println(car.speed);
//		System.out.println(bike.speed);
//		System.out.println(car.doors);
//		System.out.println(bike.pedals);
		
		// ================================
		
//		Animal animal = new Animal();
//		Dog dog = new Dog();
//
//		dog.speak();
//		animal.speak();
		
		// ================================

		Hero hero1 = new Hero("Batman", 42, "$$$");
		Hero hero2 = new Hero("Superman", 43, "everything");

		System.out.println(hero1.name);
		System.out.println(hero1.age);
		System.out.println(hero1.power);
		System.out.println(hero2);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
//	static void hello(String name, int age) {
//		System.out.println("Hello " + name);
//		System.out.println("You are " + age);
//	}
//	
//	static int add(int x, int y) {
//		int z = x + y;
//		
//		return z;
//	}
	
	// ================================

//	static int add(int a, int b) {
//		System.out.println("This is overloaded method #1");
//		return a + b;
//	}
//	
//	static int add(int a, int b, int c) {
//		System.out.println("This is overloaded method #2");
//		return a + b + c;
//	}
//	
//	static int add(int a, int b, int c, int d) {
//		System.out.println("This is overloaded method #3");
//		return a + b + c + d;
//	}
//	static double add(double a, double b) {
//		System.out.println("This is overloaded method #4");
//		return a + b;
//	}
//	
//	static double add(double a, double b, double c) {
//		System.out.println("This is overloaded method #5");
//		return a + b + c;
//	}
//	
//	static double add(double a, double b, double c, double d) {
//		System.out.println("This is overloaded method #6");
//		return a + b + c + d;
//	}
	
	// ================================
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}