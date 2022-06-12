import java.util.Scanner;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.border.Border;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Random;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import javax.sound.sampled.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws UnsupportedAudioFileException, IOException, LineUnavailableException {

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

//		Hero hero1 = new Hero("Batman", 42, "$$$");
//		Hero hero2 = new Hero("Superman", 43, "everything");
//
//		System.out.println(hero1.name);
//		System.out.println(hero1.age);
//		System.out.println(hero1.power);
//		System.out.println(hero2);
		
		// ================================
		
//		Vehicle vehicle = new Vehicle();
//		Car car = new Car();
//		
//		car.go();
		
		// ================================
		
//		Car car = new Car("Chevrolet", "Camaro", 2021);
//		
//		car.seyYear(2022);
//
//		System.out.println(car.getMake());
//		System.out.println(car.getModel());
//		System.out.println(car.getYear());
		
		// ================================

//		Car car1 = new Car("Chevrolet", "Camaro", 2021);
////		Car car2 = new Car("Ford", "Mustang", 2022);
////		car2.copy(car1);
//		Car car2 = new Car(car1);
//		
//		System.out.println(car1);
//		System.out.println(car2);
//		System.out.println();
//		System.out.println(car1.getMake());
//		System.out.println(car1.getModel());
//		System.out.println(car1.getYear());
//		System.out.println();
//		System.out.println(car2.getMake());
//		System.out.println(car2.getModel());
//		System.out.println(car2.getYear());
		
		// ================================
		
//		Rabbit rabbit = new Rabbit();
//		Hawk hawk = new Hawk();
//		Fish fish = new Fish();
//		
//		rabbit.flee();
//		hawk.hunt();
//		fish.flee();
//		fish.hunt();
		
		// ================================
		
//		Car car = new Car();
//		Bicycle bicycle = new Bicycle();
//		Boat boat = new Boat();
//		
//		Vehicle[] racers = {car, bicycle, boat};
//
//		for(Vehicle x : racers) {
//			x.go();
//		}
		
		// ================================
		
//		Scanner scanner = new Scanner(System.in);
//		Animal animal;
//		
//		System.out.println("What animal do you want?");
//		System.out.print("(1=dog) or (2=cat)");
//		int choice = scanner.nextInt();
//		
//		if (choice == 1) {
//			animal = new Dog();
//			animal.speak();
//		} else if (choice == 2) {
//			animal = new Cat();
//			animal.speak();
//		} else {
//			animal = new Animal();
//			System.out.println("That choice was invalid");
//			animal.speak();
//		}
		
		// ================================
		
//		Scanner scanner = new Scanner(System.in);
//		
//		try {	
//			System.out.println("Enter a whole number to divide: ");
//			int x = scanner.nextInt();
//			
//			System.out.println("Enter a whole number to divide by: ");
//			int y = scanner.nextInt();
//			
//			int z = x/y;
//			
//			System.out.println("result: " + z);
//		} catch (ArithmeticException e) {
//			System.out.println("You can't divide by zero!");
//		} catch (InputMismatchException e) {
//			System.out.println("Please enter a number!");
//		} catch (Exception e) {
//			System.out.println("Something went wrong!");
//		} finally {
//			scanner.close();
//		}
		
		// ================================
		
//		File file = new File("secret_message.txt");
//		
//		if(file.exists()) {
//			System.out.println("That file exists");
//			System.out.println(file.getPath());
//			System.out.println(file.getAbsolutePath());
//			System.out.println(file.isFile());
//			file.delete();
//		} else {
//			System.out.println("That file doesn't exist");
//		}
		
		// ================================
		
//		try {
//			FileWriter writer = new FileWriter("poem.txt");
//			writer.write("Roses are red \nViolets are blue \nBooty booty booty \nRockin' everywhere!");
//			writer.append("\n(A poem by Bro)");
//			writer.close();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
		
		// ================================
		
//		try {
//			FileReader reader = new FileReader("art.txt");
//			int data = reader.read();
//			while(data != -1) {
//				System.out.print((char)data);
//				data = reader.read();
//			}
//			reader.close();
//			
//		} catch (FileNotFoundException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
		
		// ================================
		
//		Scanner scanner = new Scanner(System.in);
//		
//		File file = new File("song.wav");
//		AudioInputStream audioStream = AudioSystem.getAudioInputStream(file);
//		Clip clip = AudioSystem.getClip();
//		clip.open(audioStream);
//		
//		String response = "";
//		
//		while(!response.equals("Q")) {
//			System.out.println("P = play, S = stop, R = reset, Q = quit");
//			System.out.print("Enter your choice: ");
//
//			response = scanner.next();
//			response = response.toUpperCase();
//			
//			switch(response) {
//			case ("P"): clip.start();
//			break;
//			case ("S"): clip.stop();
//			break;
//			case ("R"): clip.setMicrosecondPosition(0);
//			break;
//			case ("Q"): clip.close();
//			break;
//			default: System.out.println("Not a valid response");
//			}
//		}
//		
//		System.out.println("Bye!");
		
		// ================================
		
//		new MyFrame();
		
		// ================================
		
//		ImageIcon image = new ImageIcon("logo.png");
//		Border border = BorderFactory.createLineBorder(Color.green, 3);
//		
//		JLabel label = new JLabel();
//		label.setText("Bro, do you even code?");
//		label.setIcon(image);
//		label.setHorizontalTextPosition(JLabel.CENTER);
//		label.setVerticalTextPosition(JLabel.TOP);
//		label.setForeground(Color.green);
//		label.setFont(new Font("MV Boli", Font.PLAIN, 20));
//		label.setIconTextGap(-25);
//		label.setBackground(Color.black);
//		label.setOpaque(true);
//		label.setBorder(border);
//		label.setVerticalAlignment(JLabel.CENTER);
//		label.setHorizontalAlignment(JLabel.CENTER);
////		label.setBounds(100, 100, 250, 250);
//		
//		
//		JFrame frame = new JFrame();
//		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
////		frame.setSize(500, 500);
////		label.setLayout(null);
//		frame.setVisible(true);
//		frame.add(label);
//		frame.pack();
		
		// ================================
		
//		ImageIcon icon = new ImageIcon("logo.png");
//		
//		JLabel label = new JLabel();
//		label.setText("Hi");
//		label.setIcon(icon);
//		label.setVerticalAlignment(JLabel.BOTTOM);
//		label.setHorizontalAlignment(JLabel.RIGHT);
//		label.setBounds(100, 100, 75, 75);
//		
//		JPanel redPanel = new JPanel();
//		redPanel.setBackground(Color.red);
//		redPanel.setBounds(0, 0, 250, 250);
//		
//		JPanel bluePanel = new JPanel();
//		bluePanel.setBackground(Color.blue);
//		bluePanel.setBounds(250, 0, 250, 250);
//		
//		JPanel greenPanel = new JPanel();
//		greenPanel.setBackground(Color.green);
//		greenPanel.setBounds(0, 250, 500, 250);
//		greenPanel.setLayout(new BorderLayout());
//		
//		JFrame frame = new JFrame();
//		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
//		frame.setLayout(null);
//		frame.setSize(750, 750);
//		frame.setVisible(true);
//		frame.add(redPanel);
//		frame.add(bluePanel);
//		frame.add(greenPanel);
//		greenPanel.add(label);
		
		// ================================
		
//		  new MyFrame();
		
		// ================================
		
		JFrame frame = new JFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(500, 500);
		frame.setLayout(new BorderLayout(10, 10));
		frame.setVisible(true);

		JPanel panel1 = new JPanel();
		JPanel panel2 = new JPanel();
		JPanel panel3 = new JPanel();
		JPanel panel4 = new JPanel();
		JPanel panel5 = new JPanel();

		panel1.setBackground(Color.red);
		panel2.setBackground(Color.green);
		panel3.setBackground(Color.yellow);
		panel4.setBackground(Color.magenta);
		panel5.setBackground(Color.blue);

		panel1.setPreferredSize(new Dimension(100, 50));
		panel2.setPreferredSize(new Dimension(50, 100));
		panel3.setPreferredSize(new Dimension(100, 50));
		panel4.setPreferredSize(new Dimension(50, 100));
		panel5.setPreferredSize(new Dimension(100, 100));

		frame.add(panel1, BorderLayout.NORTH);
		frame.add(panel2, BorderLayout.EAST);
		frame.add(panel3, BorderLayout.SOUTH);
		frame.add(panel4, BorderLayout.WEST);
		frame.add(panel5, BorderLayout.CENTER);
		
		//---------------- sub panels ----------------

		JPanel panel6 = new JPanel();
		JPanel panel7 = new JPanel();
		JPanel panel8 = new JPanel();
		JPanel panel9 = new JPanel();
		JPanel panel10 = new JPanel();

		panel6.setBackground(Color.black);
		panel7.setBackground(Color.darkGray);
		panel8.setBackground(Color.gray);
		panel9.setBackground(Color.LIGHT_GRAY);
		panel10.setBackground(Color.white);
		
		panel5.setLayout(new BorderLayout());

		panel6.setPreferredSize(new Dimension(50, 50));
		panel7.setPreferredSize(new Dimension(50, 50));
		panel8.setPreferredSize(new Dimension(50, 50));
		panel9.setPreferredSize(new Dimension(50, 50));
		panel10.setPreferredSize(new Dimension(50, 50));
		
		//---------------- sub panels ----------------

		panel5.add(panel6, BorderLayout.NORTH);
		panel5.add(panel7, BorderLayout.EAST);
		panel5.add(panel8, BorderLayout.SOUTH);
		panel5.add(panel9, BorderLayout.WEST);
		panel5.add(panel10, BorderLayout.CENTER);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
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