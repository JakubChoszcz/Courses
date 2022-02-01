-- Delete table
DROP TABLE student;

-- Create table schema
CREATE TABLE student (
    student_id INT AUTO_INCREMENT,
    name VARCHAR(16),
    major VARCHAR(16) DEFAULT 'undecided',
    PRIMARY KEY(student_id)
);

-- Insert values into DB
INSERT INTO student(name, major) VALUES('Jack', 'Biology');
INSERT INTO student(name, major) VALUES('Kate', 'Sociology');
INSERT INTO student(name, major) VALUES('Claire', 'Chemistry');
INSERT INTO student(name, major) VALUES('Jack', 'Biology');
INSERT INTO student(name, major) VALUES('Mike', 'Computer Sciense');

-- Return all DB
SELECT * FROM student;