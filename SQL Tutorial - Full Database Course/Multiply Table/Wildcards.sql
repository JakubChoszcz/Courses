-- % = any # characters, _ = one character

-- Find any client's who are an LLC
SELECT *
FROM client
WHERE client_name LIKE '%LLC';

-- Find any branch suppliers who are in the label business
SELECT *
FROM branch_supplier
WHERE supplier_name LIKE '%label%';

-- Find any employee born in October
SELECT *
FROM employee
WHERE birth_date LIKE '____-10-__';

-- Find any clients who are schools
SELECT *
FROM client
WHERE client_name LIKE '%school%';