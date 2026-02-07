-- create database students;
-- use students;

 -- create table students (
--  student_id INT primary key,
--  name varchar(50) not null,
--  email varchar(100) unique,
--  age int CHECK (age >= 18),
--  status varchar(20) default 'active' ,
--  course_id int ,
--  foreign key(course_id) references courses (course_id)
--  );
--  INSERT INTO students values
--  (1, 'Rajalakshmi','raji@gmail.com',22,101),
--  -- insert into students values
--  (2,'raj', 'ram@gmail.com', 23,102);
--  

 -- INSERT INTO students values
--  (3,'raje','raje@gmail.com',24,103),
--  (4,'ammu','amm@gmail.com',25,104),
--  (5,'loki','lokii@gmail.com',26,105);

-- select * from students;

 
-- select * from students;

-- CREATE TABLE courses (
--    course_id INT PRIMARY KEY,
--   course_name VARCHAR(100) NOT NULL,
--    duration INT NOT NULL,   
--    fee DECIMAL(8,2) CHECK (fee > 0),
--  status VARCHAR(20) DEFAULT 'Active'
--  );

 --  insert into courses (course_id,course_name,duration,fee)
 -- values( 101, 'react development', 3, 15000);
--  insert into courses (course_id,course_name,duration,fee) 
--  values
--  (102,'sql',4,3000),
--  (103,'java',8,8000);
 


-- select * from courses;



-- CREATE TABLE results (
--   result_id INT PRIMARY KEY,
--   student_id INT,
--   marks INT CHECK (marks BETWEEN 0 AND 100),
--   FOREIGN KEY (student_id) REFERENCES students(student_id)
-- );
-- INSERT INTO results VALUES (1, 1, 85);
-- ALTER TABLE results
-- ADD CONSTRAINT chk_marks
-- CHECK (marks BETWEEN 0 AND 100);

-- select * from results;


-- create database company;
-- use company;

-- CREATE TABLE departments (
--   dept_id INT PRIMARY KEY,
--   dept_name VARCHAR(50) NOT NULL UNIQUE,
--   location VARCHAR(50)
-- );
-- CREATE TABLE employees (
--   emp_id INT PRIMARY KEY,
--   emp_name VARCHAR(50) NOT NULL,
  -- email VARCHAR(100) UNIQUE,
--   salary DECIMAL(10,2) CHECK (salary > 0),
--   dept_id INT,
--   FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
-- );
-- CREATE TABLE projects (
--   project_id INT PRIMARY KEY,
--   project_name VARCHAR(100) NOT NULL,
--   start_date DATE,
--   end_date DATE
-- );
-- CREATE TABLE employee_projects (
--   emp_id INT,
--   project_id INT,
--   PRIMARY KEY (emp_id, project_id),
--   FOREIGN KEY (emp_id) REFERENCES employees(emp_id),
--   FOREIGN KEY (project_id) REFERENCES projects(project_id)
-- );


-- INSERT INTO departments VALUES (1, 'IT', 'Chennai'),(2,'IIt','chennai');

-- INSERT INTO employees VALUES (101, 'Rajalakshmi', 'raji@gmail.com', 45000, 1),
-- (102,'ragavi','rag@gmail.com',25000, 2);
-- INSERT INTO projects VALUES (201, 'Website Development', '2026-01-01', '2026-03-01'),
-- (202,'datascience','2026-02-03','2026-03-13');
-- INSERT INTO employee_projects VALUES (101, 201),(102,202);
-- select * from departments;
-- select * from employees;

-- select * from projects;
-- select * from employee_projects;
