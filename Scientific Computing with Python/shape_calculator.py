class Rectangle :
    def __init__(self, width, height) :
        self.width = int(width)
        self.height = int(height)
    
    def set_width(self, width) :
        self.width = int(width)
    
    def set_height(self, height) :
        self.height = int(height)

    def get_area(self) :
        return self.width * self.height

    def get_perimeter(self) :
        return 2 * self.width + 2 * self.height

    def get_diagonal(self) :
        return (self.width ** 2 + self.height ** 2) ** .5

    def get_picture(self) :
        if (self.width > 50) or (self.height > 50) :
            return "Too big for picture."

        shape = ''

        for row in range(self.height) :
            for col in range(self.width) :
                shape += "*"
            shape += "\n"

        return(shape)

    def get_amount_inside(self, shape) :
        return(self.width // shape.width * self.height // shape.height)

    def __str__(self) :
        return f"Rectangle(width={str(self.width)}, height={str(self.height)})"


class Square(Rectangle) :
    def __init__(self, side) :
        self.width = int(side)
        self.height = int(side)

    def set_side(self, side) :
        self.width = int(side)
        self.height = int(side)

    def __str__(self) :
        return f"Square(side={str(self.width)})"

rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))