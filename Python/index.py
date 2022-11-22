# 
# 
# 
# 
# 
# 
# 
# 
# 
# Build your own Functions
def add(a, b) :
    added = a + b
    return added
print(add(2, 3))

# Loops and Iterations
n = 5
while n > 0 :
    print(n)
    n = n - 1
print('Blastoff!')
print(n)

# Iterations: Definite Loops
for i in [5, 4, 3, 2, 1] :
    print (i)
print('Blastoff!')

# Iterations: Loop Idioms33333333333333
largest_so_far = -1
for i in [3, 41, 12, 9, 74, 15] :
    if i > largest_so_far :
        largest_so_far = i
print(largest_so_far)

# Iterations: More Patterns
count = 0
sum = 0
for thing in [3, 41, 12, 9, 74, 15] :
    count = count + 1
    sum = sum + thing
print(sum, count, sum/count)

# Strings in Python
banana = "banana"
for letter in banana :
    print(letter)

# Intermediate Strings
    # string object's methods

# Reading Files
    # handle = open(filename, mode) 
    # file = open('file.txt', 'r')
    # \n - newline, it's a character

# Files as a Sequence
text = open('C:/Users/Jakub/Desktop/text.txt')
for line in text :
    line = line.rstrip()
    print(line)


text = open('C:/Users/Jakub/Desktop/text.txt')
inp = text.read()
print(inp[:20])

    # rstrip()

# Python Lists
friends = ['Konrad', 'Krzysztof', 'Maciej']

for friend in friends :
    print(friend)

print(friends[0])
print(friends[1][2])
print(len(friends))

print(range(4))

# Working with Lists
a = [1, 2, 3]
b = [4, 5, 6]
c = a + b # [1, 2, 3, 4, 5, 6]
c[1:5] # [2, 3, 4]
c[:5] # [2, 3, 4]
c[1:] # [2, 3, 4, 5, 6]

newList = list() #creates a new list
newList.append('first item') #adds an item at the end of the list
'first item' in newList #checks if 'first item' is in the newList, return TRUE or FALSE
'first item' not in newList #checks if 'first item' is NOT in the newList, return TRUE or FALSE

friends = ['Krzysztof', 'Maciej', 'Konrad']
friends.sort() #sorts a list
print(friends)
    # len(LIST)
    # max(LIST)
    # min(LIST)
    # sum(LIST)

# Strings and Lists
fLine = 'a lot          of spaces'
    # .split()
sLine = 'ads'
    # .split(';')

# Python Dictionaries
newDict = dict(); # creates a new dict
newDict['money'] = 12
newDict['candy'] = 'sweet'
newDict['candy'] = 'soure'
dict = {"Fri": 20, "Thu": 6, "Sat": 1}

# Dictionaries: Common Applications
if name in counts :
    x = counts[name]
else :
    x = 0

    # same as

x = counts.get(name, 0)

# Dictionaries and Loops
counts = dict()
text = "the clown ran after the car and the car ran into the tent and the tent fell down on the clown and the car"
words = text.split()

for word in words :
    counts[word] = counts.get(word, 0) + 1
print('Counts', counts)

list(dict)
dict.keys()
dict.values()
dict.items()

for key, value in dict.items() :
    print(key, value)

# The Tuples Collection
x = ('Glenn','Sally','Joseph')
print(x[2])
    # tuples are immutable
(x,y) = (4, 'fred')

# Comparing and Sorting Tuples
sorted()

# Regular Expressions
import re

hand = open('file.txt')
for line in hand :
    line = line.rstrip()
    if re.search('From:', line) :
    if re.search('^From:', line) : # if line begins with From
    if re.search('.', line) : # if match any char 
    if re.search('*', line) : # if match many chars 
    if re.search('\S+', line) : # if match any non-whitespace char (+) one or more times 
        print(line)

# Regular Expressions: Matching and Extracting Data
import re

x = "My 2 favorite numbers are 19 and 42"
y = re.findall('[0-9]+', x)
print(y)