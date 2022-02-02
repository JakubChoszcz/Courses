<!-- SQL -->
S - Data, Q - Query, L - Language

<!-- C.R.U.D. -->
C - Create
R - Read
U - Update
D - Delete

<!-- Database Queries -->
Queries are requests made to the databases managment system for specific information.

Relational Databases use SQL and store data in rows and columns
Non-Relational Databes use other data structures.

<!-- Tables and Keys -->
    Col Col Col Col
Row ___|___|___|___
Row ___|___|___|___
Row ___|___|___|___
Row    |   |   |

Primary Key is unique for each row of a table
Surrogate Key is a key that has no mapping to anything
Nautural Key is a key that has a mapping or a purpose in the real world
Foreign key is an attribute that we can store on a databse table that link us to another link table (Primare Key in another table)
Super key is an attribute that we can store on a database table that link us to an primary key in the same table
Composite Key is when at least two ununiqe keys combine in one unique key

<!-- SQL Basics -->
SQL is a language used for interacting with Relational Database Managment System (RDBS)
*Create, retrieve, update & delete data
*Create & managment databases
*Design & create databse tables
*Perform administration tasks

<!-- MySQL -->
Remeber about ";"

create database *database name*; <=

<!-- Data Types -->
INT             - whole numbers
DECIMAL(M,N)    - decimal numbers (M - before comma, N - after comma)
VARCHAR(16)      - string of text of length 16
BLOB            - binary large object, store large data
DATE            - YYYY-MM-DD
TIMESTAMP       - YYYY-MM-DD HH:MM:SS
PRIMARY KEY(*key name*)

<!-- Creating Tables -->
CREATE TABLE *table name* (...);

column*comma*
column*comma*
column

... PRIMARY KEY <= Primary is NOT NULL and UNIQUE
... NOT NULL    
... UNIQUE
... DEFAULT *default value*
... AUTO_INCREMENT

DESCRIBE *table name*;

DROP TABLE *table name*;

Whenever you create a FOREIGN KEY you're going to put ON DELETE SET NULL at the end of a line / ON DELETE CASCADE

<!-- Basic Queries -->
SELECT *column name*, ...
FROM *table name*
ORDER BY *column name*, ... DESC / ASC
LIMIT *limit nuber*
WHERE *column name* = *value*
<!-- <, >, <=, >=, =, <> (not equal), AND, OR -->
... *column name* IN (*value*, *value*)

SELECT DISTINCT *column name*

<!-- Triggers -->
use *DB name*;
DROP TRIGGER *trigger name*;