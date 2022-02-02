-- ON DELETE SET NULL <= set deleted cell to NULL
-- ON DELETE CASCADE <= delete the entire row where the cell was deleted
-- PRIMARY KEY can NOT have a NULL value! (set ON DELETE CASCADE)
-- FOREIGN KEY, you can use whatever you want

-- ON DELETE SET NULL
CREATE TABLE branch (
    branch_id INT PRIMARY KEY,
    branch_name VARCHAR(40),
    mgr_id INT,
    mgr_start_date DATE,
    FOREIGN KEY (mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
);

DELETE FROM employee
WHERE emp_id = 102;

SELECT *
FROM branch;

SELECT *
FROM employee;

-- ON DELETE CASCADE
CREATE TABLE branch_supplier (
    branch_id INT,
    supplier_name VARCHAR(40),
    supply_type VARCHAR(40),
    PRIMARY KEY (branch_id, supplier_name),
    FOREIGN KEY (branch_id) REFERENCES branch(branch_id) ON DELETE CASCADE
);

DELETE FROM branch
WHERE branch_id = 2;

SELECT *
FROM branch_supplier;