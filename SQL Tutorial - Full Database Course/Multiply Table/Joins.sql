INSERT INTO branch VALUES(4, 'Bufallo', NULL, NULL);

-- Find all branches and the names of ther managers
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee
JOIN branch
ON employee.emp_id = branch.mgr_id;

-- Find all employees and if an emplyoee is an mgr return the name of a branch
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee
LEFT JOIN branch
ON employee.emp_id = branch.mgr_id;

-- Find all branch name and if an branch has a mgr return the first name
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee
RIGHT JOIN branch
ON employee.emp_id = branch.mgr_id;

-- FULL OUTER JOIN <= combine LEFT JOIN with RIGHT JOIN