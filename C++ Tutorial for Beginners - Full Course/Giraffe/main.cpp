#include <iostream>
#include <cmath>

using namespace std;

/*
int main()
{
    cout << "    /|" << endl;
    cout << "   / |" << endl;
    cout << "  /  |" << endl;
    cout << " /   |" << endl;
    cout << "/____|" << endl;

    return 0;
}
*/

/*
int main()
{
    string characterName = "John";
    int characterAge;
    characterAge = 35;

    cout << "There one was a man named " << characterName << endl;
    cout << "He was " << characterAge << " years old" << endl;

    characterName = "Mike";

    cout << "He liked the name " << characterName << endl;
    cout << "But did not like being " << characterAge << endl;

    return 0;
}
*/

/*
int main ()
{
    char grade = 'A';
    string phrase = "Giraffe Academys";
    int age = 50;
    double gpa = 2.3;
    bool isMale = true;

    cout << grade << phrase << age << gpa << isMale << endl;

    return 0;
}
*/

/*
int main()
{
    string phrase = "Giraffe Academy";
    string phraseSub;
    phraseSub = phrase.substr(8, 3);
    phrase[0] = 'B';

    cout << phraseSub;

    return 0;
}
*/

int main()
{
    int wnum = 5;
    double dnum = 5.5;

    wnum++;
    wnum--;
    wnum += 2;
    wnum -= 2;

    cout << pow(2, 5) << endl;
    cout << round(5.32) << endl;
    cout << ceil(5.32) << endl;
    cout << floor(5.32) << endl;
    cout << fmax(2, 10) << endl;
    cout << fmin(2, 10) << endl;

    return 0;
}
