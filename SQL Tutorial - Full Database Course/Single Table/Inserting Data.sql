-- Insert values into DB
INSERT INTO student VALUES(1, 'Jack', 'Biology');
INSERT INTO student VALUES(2, 'Kate', 'Sociology');

-- Return all DB
SELECT * FROM student;

-- Insert only specific values
INSERT INTO student(student_id, name) VALUES(3, 'Claire');