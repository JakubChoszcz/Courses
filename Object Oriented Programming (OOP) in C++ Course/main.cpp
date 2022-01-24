#include <iostream>

using namespace std;



class AbstractEmployee {
    virtual void AskForPromotion() = 0;
};

class Employee: AbstractEmployee {
    private:
        string Company;
        int Age;

    protected:
        string Name;
    
    public:
    // Name
        void setName(string aName) {
            Name = aName;
        }

        string getName() {
            return Name;
        }

    // Company
        void setCompany(string aCompany) {
            Company = aCompany;
        }

        string getCompany() {
            return Company;
        }

    // Age
        void setAge(int aAge) {
            if (aAge >= 18) {
            Age = aAge;
            }
        }

        int getAge() {
            return Age;
        }

    // Employee
        Employee(string aName, string aCompany, int aAge) {
            Name = aName;
            Company = aCompany;
            Age = aAge;
        }

        void AskForPromotion() {
            if (Age > 30) {
                cout << Name << " got promoted!" << endl;
            } else {
                cout << Name << ", sorry NO promotion for You!" << endl;
            }
        }

        virtual void Work() {
            cout << Name << " is checking email, task backlog, performing tasks..." << endl;
        }
};

class Developer: public Employee {
    public:
        string FavProgrammingLanguage;

        Developer(string aName, string aCompany, int aAge, string aFavProgrammingLanguage)
            :Employee(aName, aCompany, aAge) {
            FavProgrammingLanguage = aFavProgrammingLanguage;
        }

        void FixBug() {
            cout << Name << " fixed bug using " << FavProgrammingLanguage << endl;
        }

        void Work() {
            cout << Name << " is writing " << FavProgrammingLanguage << " code" << endl;
        }
};

class Teacher: public Employee {
    public:
        string Subject;

        Teacher(string aName, string aCompany, int aAge, string aSubject)
            :Employee(aName, aCompany, aAge) {
                Subject = aSubject;
            }

        void PreparedLesson() {
            cout << Name << " is preparing " << Subject << " lesson" << endl;
        }

        void Work() {
            cout << Name << " is teaching " << Subject << endl;
        }
};

int main()
{
    Employee employee1("Jakub", "Sony", 20);
    Employee employee2("Konrad", "Santander", 32);
    Developer developer1("Krzysztof", "Microsoft", 45, "JavaScript");
    Teacher teacher1("Maciej", "Nintendo", 19, "History");

    Employee* e1 = &developer1;
    Employee* e2 = &teacher1;

    e1->Work();
    e2->Work();

    return 0;
}