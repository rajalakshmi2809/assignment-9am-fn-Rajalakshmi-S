day 46--  

-- -- create database employeess;
-- -- use employeess;

--  -- create table empp(
-- --  emp_id int,
-- --  emp_name varchar(50),
-- --  emp_salary int,
-- --  status varchar(50) default 'active'
-- --  );


--  insert into empp(emp_id,emp_name,emp_salary) values
--  (1,'Thirumal',14000),
--  (2,'Praveen',15000),
-- (3,'Ragavi',16000),
--  (4,'Rooba',20000),
-- (5,'ram',25000),



--  insert into empp (emp_id,emp_name,emp_salary)values(9,'charan',80000);
-- insert into empp (emp_id,emp_name,emp_salary)values(10,'sara',90000);
-- insert into empp (emp_id,emp_name,emp_salary)values(11,'rmkiran',100000);
 
 -- 1q--
-- select * from empp;
  --  select emp_name from empp;
  
  -- 2 Q--
  
--   select * from empp where emp_salary > 40000;

-- 3 q -- 

-- alter table empp
-- add department varchar(50);
-- select * from empp;

-- UPDATE empp SET department = 'HR' WHERE emp_id = 1 limit 1;
-- UPDATE empp SET department = 'IT' WHERE emp_id = 2 limit 1;
-- UPDATE empp SET department = 'Finance' WHERE emp_id = 3 limit 1;

-- select distinct department from empp;
--  
-- 4 q-- 
-- select * from empp
-- order by emp_salary ASC;

-- select * from empp
-- order by emp_salary DESC;

-- 