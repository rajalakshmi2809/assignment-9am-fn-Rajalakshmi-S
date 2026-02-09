5q-- 
-- select count(distinct emp_id) as total_empp from empp;
-- select count(*) as total_empp from empp;

-- 6 q-- 

-- select department,AVG(emp_salary) as AVG_salary
-- from empp
-- group by department;

-- 7q-- 
-- select * from empp order by emp_salary DESC limit 3; 


-- 8q-- 
 -- use employeess;

-- UPDATE empp 
-- SET status = 'inactive'
-- WHERE status='active';

-- select * from empp;

-- 9q--  

-- SELECT 
--     emp_name,
--     emp_salary,
--     CASE
--         WHEN emp_salary < 20000 THEN 'Low Salary'
--         WHEN emp_salary BETWEEN 20000 AND 40000 THEN 'Medium Salary'
--         ELSE 'High Salary'
--     END AS salary_range
-- FROM empp;



-- 10 q --
 -- select department,
-- count(*) as total_employees,
-- sum(emp_salary) as total_salary,
-- AVG(emp_salary) as avg_salary,
-- MIN(emp_salary) as min_salary,
-- MAX(emp_salary) as max_salary
-- from empp
-- GROUP BY department;