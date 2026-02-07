--  1. Define table

-- A table is a structured way to organize data into rows and columns so that information is easy to read, compare, and manage.

-- Rows represent individual records (one complete entry).

-- Columns represent specific fields or attributes of the data.



-- 2. Not null & Unique
-- NOT NULL

-- * NOT NULL means a column cannot have empty (NULL) values

--* Every row must contain a value in that column
-- EX: name varchar(50) NOT NULL



-- UNIQUE

-- UNIQUE means all values in the column must be different

-- NULL values are allowed (usually only once, depending on DB)

-- email VARCHAR(100) UNIQUE



--3. Why PRIMARY KEY is important
-- A PRIMARY KEY is important because it uniquely identifies each record and ensures data integrity in a table.

-- 4 Write syntax for DEFAULT

-- CREATE TABLE students (
--   student_id INT PRIMARY KEY,
--   name VARCHAR(50),
--   status VARCHAR(20) DEFAULT 'Active',
--   age INT DEFAULT 18
-- );

-- INSERT INTO students (student_id, name)
-- VALUES (1, 'Rajalakshmi');


-- 5. What is FOREIGN KEY?

-- CREATE TABLE students (
--   student_id INT PRIMARY KEY,
--   name VARCHAR(50)
-- );

-- CREATE TABLE enrollments (
--   enroll_id INT PRIMARY KEY,
--   student_id INT,
--   FOREIGN KEY (student_id) REFERENCES students(student_id)
-- );






