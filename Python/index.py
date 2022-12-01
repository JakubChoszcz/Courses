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

# Regular Expressions: Practical Applications

# Networking with Python
import socket
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80))

# Networking Protocol

# Networking: Write a Web Browser
import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4.org', 80))
cmd = 'GET http://data/pr4e.org/romeo.txt HTTP/1.0\n\n'.encode()
mysock.send(cmd)

while True :
    data = mysock.recv(512)
    if (len(data) < 1) :
        break
    print(data.decode())
mysock.close()

# Networking: Text Processing
print(ord('H'))
import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4.org', 80))
cmd = 'GET http://data/pr4e.org/romeo.txt HTTP/1.0\n\n'.encode() # encode data before send
mysock.send(cmd)

while True :
    data = mysock.recv(512)
    if (len(data) < 1) :
        break
    print(data.decode()) # descode data before print
mysock.close()

# Networking: Using urllib in Python
import urllib.request, urllib.parse, urllib.error

fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')

for line in fhand :
    print(line.decode().strip())

counts = dict()
for line in fhand :
    words = line.decode().split()
    for word in words :
        counts[word] = counts.get(word, 0) + 1
print(counts)

fhand = urllib.request.urlopen('http://www.dr-chuck.com/page1.html')
for line in fhand :
    print(line.decode().strip())

# Networking: Web Scraping with Python
import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup

url = input('Enter - ')
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')

tags = soup('a')
for tag in tags :
    print(tag.get('href', None))


# Using Web Services

# Web Services: XML
<person>
  <name>Chuck</name>
  <phone type="intl">
    +1 734 303 4456
  </phone>
  <email hide="yes" />
</person>

# Web Services: XML Schema
import xml.etree.ElementTree as ET
data = '''<person>
    <name>Chuck</name>
    <phone type=intl>
        +1 734 303 4456
    </phone>
    <email hide=yes/>
</person>'''

tree = ET.fromstring(data)
print('Name:', tree.find('name').text)
print('Attr:', tree.find('email').get('hide'))

# Web Services: JSON
import json
data = '''{
    "name" : "Chuck",
    "phone" : {
        "type" : "intl",
        "number" : "+1 734 303 4467"
    },
    "email" : {
        "hide" : "yes"
    }    
}'''

info = json.loads(data)
print('Name:', info["name"])

input = '''[
    {"id":"001","name":"Mike","att":"x"},{"id":"002","name":"Chuck","att":"y"}
]'''

info = json.loads(input)
print('User count:', len(info))
for item in info:
    print('Name:', item['name'])
    print('Id:', item['id'])
    print("Attribute:", item['att'])

# Web Services: Service Oriented Approach

# Web Services: APIs

# Web Services: API Rate Limiting and Security

# Python Objects

# Objects: A Sample Class
