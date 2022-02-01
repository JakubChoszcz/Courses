-- Find the number of employees
SELECT COUNT(emp_id)
FROM employee;

SELECT COUNT(super_id)
FROM employee;

-- Find the number of female employees bord after 1970
SELECT COUNT(emp_id)
FROM employee
WHERE sex = 'F' AND birth_date > '1970-01-01';

-- Find the average of all employee's salries
SELECT AVG(salary)
FROM employee
WHERE sex = 'M';

-- Find the sum of all employee's salaries
SELECT SUM(salary)
FROM employee;

-- Find out how many males and females there are 
SELECT COUNT(sex), sex
FROM employee
GROUP BY sex;

-- Find the total sales of each salesman
SELECT SUM(total_sales), client_id
FROM works_with
GROUP BY emp_id;