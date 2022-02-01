-- Return all from student table
SELECT * 
FROM student;

-- Return major and major from student table
SELECT name, student.major
FROM student;

SELECT name, student.major
FROM student
ORDER BY major ASC, name DESC
LIMIT 2;

SELECT name, student.major
FROM student
WHERE major <> 'Chemistry'
ORDER BY major ASC;

SELECT name, student.major
FROM student
WHERE name IN ("Jack", "Mike")
ORDER BY major ASC;

SELECT name, student.major
FROM student
WHERE name IN ("Jack", "Mike") AND student_id > 3
ORDER BY major ASC;