-- Find all employees
SELECT * 
FROM employee;

-- Find all employees ordered by salary (nax -> min)
SELECT *
FROM employee
ORDER BY salary DESC;

-- Find all employees ordered by sex than name
SELECT *
FROM employee
ORDER BY sex, first_name DESC;

-- Find the first 5 employees in the table
SELECT *
FROM employee
LIMIT 5;

-- Find the first and last names of all employees
SELECT first_name, last_name
FROM employee;

-- Find the forename and surnames names of all employees
SELECT first_name AS forename, last_name AS surname
FROM employee;

-- Find out all the different genders
SELECT DISTINCT branch_id
FROM employee;