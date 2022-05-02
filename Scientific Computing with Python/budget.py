class Category :
    def __init__(self, name) :
        self.name = name
        self.ledger = []
        self.balance = 0

    def deposit(self, amount, description = '') :
        self.ledger.append({"amount": amount, "description": description})
        self.balance += amount
    
    def withdraw(self, amount, description = "") :
        if self.balance - amount > 0 :
            self.balance -= amount
            self.ledger.append({"amount": -abs(amount), "description": description})

        return self.check_funds(amount)

    def get_balance(self) :
        return self.balance

    def transfer(self, amount, another) :
        if self.balance - amount > 0 :
            self.balance -= amount
            self.ledger.append({"amount": -abs(amount), "description": f"Transfer to {another.name}"})
            another.deposit(amount, f"Transfer from {self.name}")
        
        return self.check_funds(amount)

    def check_funds(self, amount) :
        if self.balance < amount :
            return False
        
        return True

    def __str__(self) :
        summary = f"{self.name.center(30, '*')}\n"

        for i in self.ledger :
            amount = f"{i['amount']:.2f}"
            summary += f"{i['description'][0:23].ljust(23, ' ')}{str(amount).rjust(7, ' ')}\n"

        summary +=  f"Total: {self.balance:.2f}"
        return summary

def create_spend_chart(categories) :
    chart = "Percentage spent by category\n"

    all_spent = 0
    categories_percentage = []
    categories_name = []
    percentage_labels = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]


    for category in categories :
        category_spent = 0

        for record in category.ledger :
            if record["amount"] < 0 :
                category_spent += record["amount"]

        all_spent += category_spent

        categories_percentage.append({"category": category.name, "percentage": category_spent})
        categories_name.append(category.name)

    for category in categories_percentage :
        category["percentage"] = category["percentage"] / all_spent * 100

    for label in percentage_labels :
        row = f"{str(label).rjust(3, ' ')}|"

        for category in categories_percentage :
            if category["percentage"] > label :
                row += " o "
            else :
                row += "   "

        row += " \n"
        chart += row

    chart += f"    {len(categories) * '---'}-"

    for i, c in enumerate(max(categories_name, key=len)) :
        row = "\n    "

        for category in categories_name :
            if len(category) > i :
                row += f" {category[i]} "
            else :
                row += f"   "

        row += " "
        chart += row

    return chart

# === setUp ===
food = Category("Food")
entertainment = Category("Entertainment")
business = Category("Business")

# === test_deposit ===
# food.deposit(900, "deposit")
# print(food.ledger[0])

# === test_deposit_no_description ===
# food.deposit(45.56)
# print(food.ledger[0])

# === test_withdraw ===
# food.deposit(900, "deposit")
# food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
# print(food.ledger[1])

# === test_withdraw_no_description ===
# food.deposit(900, "deposit")
# food.withdraw(45.67)
# print(food.ledger[1])

# === test_get_balance ===
# food.deposit(900, "deposit")
# food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
# print(food.get_balance())

# === test_transfer ===
# food.deposit(900, "deposit")
# food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
# food.transfer(20, entertainment)
# print(food.ledger[2])

# === test_check_funds ===
# food.deposit(10, "deposit")
# print(food.check_funds(20))

# === test_withdraw_no_funds ===
# food.deposit(100, "deposit")
# print(food.withdraw(100.10))

# === test_transfer_no_funds ===
# food.deposit(100, "deposit")
# print(food.transfer(200, entertainment))

# === test_to_string ===
# food.deposit(900, "deposit")
# food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
# food.transfer(20, entertainment)
# print(str(food))

# === test_create_spend_chart ===
# food.deposit(900, "deposit")
# entertainment.deposit(900, "deposit")
# business.deposit(900, "deposit")
# food.withdraw(105.55)
# entertainment.withdraw(33.40)
# business.withdraw(10.99)
# print(create_spend_chart([business, food, entertainment]))