-- Delete table
DROP TABLE student;

-- Create table schema
CREATE TABLE student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(16),
    major VARCHAR(16)
);

-- Insert values into DB
INSERT INTO student(name, major) VALUES('Jack', 'Biology');
INSERT INTO student(name, major) VALUES('Kate', 'Sociology');
INSERT INTO student(name, major) VALUES('Claire', 'Chemistry');
INSERT INTO student(name, major) VALUES('Jack', 'Biology');
INSERT INTO student(name, major) VALUES('Mike', 'Computer Science');

-- Return all DB
SELECT * FROM student;

-- Update value major to 'Bio' only there, where major is 'Biology'
UPDATE student
SET major = 'Bio'
WHERE major = 'Biology';

-- Update value major to 'Compuer Sci' only there, where student_id is equal 4
UPDATE student
SET major = 'Compuer Sci'
WHERE student_id = 4;

-- Update value major to 'Biochemistry' only there, where major i 'Bio' or 'Chemistry'
UPDATE student
SET major = 'Biochemistry'
WHERE major = 'Bio' OR major = 'Chemistry';

-- Update value name to 'Tom' and major to 'undecided' only there, where student_id is equal 4
UPDATE student
SET name = 'Tom', major = 'undecided'
WHERE student_id = 1;

-- Update every major to 'undecided'
UPDATE student
SET major = 'undecided';

-- Delete of the rows
DELETE FROM student;

-- Delete row with student_id is equal 4
DELETE FROM student
WHERE student_id = 4 AND major = 'undecided';