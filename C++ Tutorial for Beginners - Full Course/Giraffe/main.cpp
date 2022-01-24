#include <iostream>
#include <cmath>

using namespace std;



// int main()
// {
//     cout << "    /|" << endl;
//     cout << "   / |" << endl;
//     cout << "  /  |" << endl;
//     cout << " /   |" << endl;
//     cout << "/____|" << endl;

//     return 0;
// }



// int main()
// {
//     string characterName = "John";
//     int characterAge;
//     characterAge = 35;

//     cout << "There one was a man named " << characterName << endl;
//     cout << "He was " << characterAge << " years old" << endl;

//     characterName = "Mike";

//     cout << "He liked the name " << characterName << endl;
//     cout << "But did not like being " << characterAge << endl;

//     return 0;
// }



// int main ()
// {
//     char grade = 'A';
//     string phrase = "Giraffe Academys";
//     int age = 50;
//     double gpa = 2.3;
//     bool isMale = true;

//     cout << grade << phrase << age << gpa << isMale << endl;

//     return 0;
// }



// int main()
// {
//     string phrase = "Giraffe Academy";
//     string phraseSub;
//     phraseSub = phrase.substr(8, 3);
//     phrase[0] = 'B';

//     cout << phraseSub;

//     return 0;
// }



// int main()
// {
//     int wnum = 5;
//     double dnum = 5.5;

//     wnum++;
//     wnum--;
//     wnum += 2;
//     wnum -= 2;

//     cout << pow(2, 5) << endl;
//     cout << round(5.32) << endl;
//     cout << ceil(5.32) << endl;
//     cout << floor(5.32) << endl;
//     cout << fmax(2, 10) << endl;
//     cout << fmin(2, 10) << endl;

//     return 0;
// }



// int main()
// {
//     int age;
//     string name;

//     cout << "Enter your age: ";
//     cin >> age;
//     cout << "Enter your name: ";
//     getline(cin, name);

//     cout << "Hello, " << name << ". You are " << age << " years old.";

//     return 0;
// }



// int main()
// {
//     double num1, num2;

//     cout << "Enter first number: ";
//     cin >> num1;

//     cout << "Enter second number: ";
//     cin >> num2;

//     cout << num1 + num2;

//     return 0;
// }



// int main()
// {
//     string color, pluralNoun, celebrity;

//     cout << "Enter a color: ";
//     getline(cin, color);

//     cout << "Enter a plural noun: ";
//     getline(cin, pluralNoun);

//     cout << "Enter a celebrity: ";
//     getline(cin, celebrity);

//     cout << "Roses are " << color << endl;
//     cout << pluralNoun << " are blue" << endl;
//     cout << "I love " << celebrity << endl;

//     return 0;
// }



// int main()
// {
//     int luckyNums[20] = {4, 8, 15, 16, 23, 42};

//     luckyNums[3] = 11;
//     luckyNums[10] = 64;

//     cout << luckyNums[10];

//     return 0;
// }  



// void sayHi(string name, int age);

// int main()
// {
//     int num;
//     num = 4;

//     sayHi("Jakub", 20);
//     sayHi("Maja", 24);

//     return 0;
// }

// void sayHi(string name, int age) {
//     cout << "Hello " << name << ", you are " << age << " years old." << endl;
// }



// double cube(double num) {
//     double result = num * num * num;

//     return result;

//     cout << "Hello";
// }

// int main()
// {
//     cout << cube(5.0);

//     return 0;
// }



// int main()
// {
//     bool isMale = true;
//     bool isTall = true;

//     if (isMale && isTall)
//     {
//         cout << "You are a tall male";
//     } else if (isMale && !isTall) {
//         cout << "Your are a short male";
//     } else if (!isMale && isTall) {
//         cout << "You are tall, but not male";
//     } else {
//         cout << "You are not male and not tall";
//     }
    
//     return 0;
// }



// int getMax(int num1, int num2, int num3) {
//     int result;

//     if (num1 >= num2 && num1 >= num3) {
//         result = num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         result = num2;
//     } else {
//         result = num3;
//     }

//     return result;
// }

// int main()
// {
//     cout << getMax(5, 3, 7);

//     return 0;
// }



// int main()
// {
//     int num1, num2;
//     char op;

//     cout << "Enter first number: ";
//     cin >> num1;

//     cout << "Enter operator: ";
//     cin >> op;

//     cout << "Enter second number: ";
//     cin >> num2;

//     int result;

//     if (op == '+') {
//         result = num1 + num2;
//     } else if (op == '-') {
//         result = num1 - num2;
//     } else if (op == '*') {
//         result = num1 * num2;
//     } else if (op == '/') {
//         result = num1 / num2;
//     } else {
//         cout << "Invalid operator";
//     }

//     cout << result;

//     return 0;
// }



// string getDayOfWeek(int dayNum) {
//     string dayName;

//     switch (dayNum)
//     {
//     case 0:
//         dayName = "Sunday";
//         break;

//     case 1:
//         dayName = "Monday";
//         break;

//     case 2:
//         dayName = "Tuesday";
//         break;
    
//     case 3:
//         dayName = "Wednesday";
//         break;
    
//     case 4:
//         dayName = "Thursday";
//         break;
    
//     case 5:
//         dayName = "Friday";
//         break;
    
//     case 6:
//         dayName = "Saturday";
//         break;
    
//     default:
//         dayName = "Invalid day number";
//         break;
//     }

//     return dayName;
// }

// int main()
// {
//     cout << getDayOfWeek(10);

//     return 0;
// }



// int main()
// {
//     int index = 1;

//     while (index <= 5) {
//         cout << index << endl;
//         index++;
//     }

//     return 0;
// }



// int main()
// {
//     int secretNum = 7;
//     int guess;
//     int guessCount = 0;
//     int guessLimit = 3;
//     bool outOfGuess = false;

//     while (secretNum != guess && !outOfGuess)
//     {
//         if (guessCount < guessLimit) {
//             cout << "Enter guess: ";
//             cin >> guess;
//             guessCount++;
//         } else {
//             outOfGuess = true;
//         }
//     }

//     if (outOfGuess) {
//         cout << "You lose!";
//     } else {
//         cout << "You win!";
//     }

//     return 0;
// }



// int main()
// {
//     int secretNum = 7;
//     int guess;

//     do {
//         cout << "Enter guess: ";
//         cin >> guess;
//     } while (secretNum != guess);

//     cout << "You win!";

//     return 0;
// }



// int main()
// {
//     int nums[] = {1, 2, 5, 7, 3};

//     for (int i = 0; i < 5; i++) {
//         cout << nums[i] << endl;
//     }

//     return 0;
// }



// int power(int baseNum, int powNum) {
//     int result = 1;

//     for (int i = 0; i < powNum; i++) {
//         result = result * baseNum;
//     }

//     return result;
// }

// int main()
// {
//     cout << power(2, 5);

//     return 0;
// }



// int main()
// {
//     int numberGrid[3][2] = {
//         {1, 2},
//         {3, 4},
//         {5, 6},
//     };

//     for (int i = 0; i < 3; i++) {
//         for (int j = 0; j < 2; j++) {
//             cout << numberGrid[i][j];
//         }
        
//         cout << endl;
//     }

//     return 0;
// }



// int main()
// {
//     int age = 19;
//     int *pAge = &age;

//     double gpa = 2.7;
//     double *pGpa = &gpa;

//     string name = "Mike";
//     string *pName = &name;

//     cout << "age: " << &age << endl;
//     cout << "gpa: " << &gpa << endl;
//     cout << "name: " << &name << endl;

//     cout << "age: " << &age << endl;
//     cout << "pAge: " << &pAge << endl;

//     cout << *&gpa << endl;     

//     return 0;
// }



// class Book {
//     public: 
//         string title;
//         string author;
//         int pages;
// };

// int main()
// {
//     Book book1;
//     book1.title = "Harry Potter";
//     book1.author = "JK Rowling";
//     book1.pages = 500;

//     Book book2;
//     book2.title = "Lord of the Rings";
//     book2.author = "Tolkien";
//     book2.pages = 700;

//     cout << "Title: " << book1.title;

//     return 0;
// }



// class Book {
//     public: 
//         string title;
//         string author;
//         int pages;

//         Book() {
//             title = "no title";
//             author = "no author";
//             pages = 0;
//         }

//         Book(string aTitle, string aAuthor, int aPages) {
//             title = aTitle;
//             author = aAuthor;
//             pages = aPages;
//         }
// };

// int main()
// {
//     Book book1("Harry Potter", "JK Rowling", 500);
//     Book book2("Lord of the Rings", "Tolkien", 700);
//     Book book3;

//     cout << book3.title;

//     return 0;   
// }



// class Student {
//     public:
//         string name;
//         string major;
//         double gpa;

//         Student(string aName, string aMajor, double aGpa) {
//             name = aName;
//             major = aMajor;
//             gpa = aGpa;
//         }

//         bool hasHonors() {
//             if (gpa >= 3.5) {
//                 return true;
//             }

//             return false;
//         }
// };

// int main()
// {
//     Student student1("Jim", "Business", 2.4);
//     Student student2("Pam", "Art", 3.6);

//     cout << student2.hasHonors();

//     return 0;
// }



// class Movie {
//     private:
//         string rating;

//     public: 
//         string title;
//         string director;

//         Movie(string aTitle, string aDirector, string aRating) {
//             title = aTitle;
//             director = aDirector;
//             setRating(aRating);
//         }

//         void setRating(string aRating) {
//             if (aRating == "G" || aRating == "PG" || aRating == "PG-13" || aRating == "R" || aRating == "NR") {
//                 rating = aRating;
//             } else {
//                 rating = "NR";
//             }
//         }

//         string getRating() {
//             return rating;
//         }
// };

// int main()
// {
//     Movie avengers("The Avengers", "Joss Whedon", "PG-14");

//     avengers.setRating("Dog");

//     cout << avengers.getRating();

//     return 0;
// }



// class Chef {
//     public:
//         void makeChicken() {
//             cout << "The chef makes yummy chicken" << endl;
//         }
        
//         void makeSalad() {
//             cout << "The chef makes salad" << endl;
//         }

//         void makeSpecialDish() {
//             cout << "The chef make BBQ ribs" << endl;
//         }
// };

// class ItalianChef : public Chef {
//     public:
//         void makePasta() {
//             cout << "The chef makes pasta" << endl;
//         }

//         void makeSpecialDish() {
//             cout << "The chef makes chicken parm" << endl;
//         }
// };

// int main()
// {   
//     ItalianChef italianChef;
//     italianChef.makeSpecialDish();

//     return 0;
// }