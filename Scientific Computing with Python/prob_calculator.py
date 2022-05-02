import copy
import random
# Consider using the modules imported above.

class Hat:
    def __init__(self, **balls) :
        self.contents = []
        
        for color, number in balls.items() :
            for x in range(number) :
                self.contents.append(color)

        self.contents_copy = self.contents.copy()

    def draw(self, number) :
        self.contents = self.contents_copy.copy()
        random_balls = []

        if number > len(self.contents) :
            return self.contents

        for x in range(number) :
            random_index = random.randint(0, len(self.contents) - 1)
            random_balls.append(self.contents[random_index])
            del self.contents[random_index]

        return random_balls

def experiment(hat, expected_balls, num_balls_drawn, num_experiments) :
    drawn = 0

    for experiment in range(num_experiments) :
        if_pass = 1
        random_balls = hat.draw(num_balls_drawn)

        for color, number in expected_balls.items() :
            if number > random_balls.count(color) :
                if_pass -= 1
                break 

        drawn += if_pass

    return drawn/num_experiments

hat = Hat(black=2, red=2, green=2)
probability = experiment(hat=hat,
                  expected_balls={"red":2,"green":1},
                  num_balls_drawn=5,
                  num_experiments=2000)