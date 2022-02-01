-- Create table schema
CREATE TABLE student (
    student_id INT PRIMARY KEY,
    name VARCHAR(16),
    major VARCHAR(16)
);

-- Show table schema
DESCRIBE student;

-- Delete table
DROP TABLE student; 

-- Add extra column
ALTER TABLE student ADD gpa DECIMAL(3, 2);

-- Delete specific column
ALTER TABLE student DROP COLUMN gpa;