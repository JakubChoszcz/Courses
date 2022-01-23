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



int main()
{
    int num1, num2;
    char op;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter operator: ";
    cin >> op;

    cout << "Enter second number: ";
    cin >> num2;

    int result;

    if (op == '+') {
        result = num1 + num2;
    } else if (op == '-') {
        result = num1 - num2;
    } else if (op == '*') {
        result = num1 * num2;
    } else if (op == '/') {
        result = num1 / num2;
    } else {
        cout << "Invalid operator";
    }

    cout << result;

    return 0;
}