-- Find names of all employees who have
-- sold over 30,000 to a single client
SELECT employee.first_name, employee.last_name
FROM employee
WHERE employee.emp_id IN (
    SELECT works_with.emp_id
    FROM works_with
    WHERE works_with.total_sales > 30000
);

-- Find all clients who are handled by the branch
-- that Michael Scott manages
SELECT client.client_name
FROM client
WHERE client.branch_id IN (
    SELECT employee.branch_id
    FROM employee
    WHERE employee.first_name = 'Michael'
);

SELECT client.client_name
FROM client
WHERE client.branch_id = (
    SELECT employee.branch_id
    FROM employee
    WHERE employee.first_name = 'Michael'
    LIMIT 1 -- if you use '=' remeber about LIMIT
);