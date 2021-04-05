--List all employee first and last names only that live in Calgary.
SELECT first_name, last_name FROM employee WHERE city = 'Calgary';

--Find the birthdate for the youngest employee.
SELECT MAX(birth_date) from employee;

--Find the birthdate for the oldest employee.
SELECT MIN(birth_date) from employee;

--Find everyone that reports to Nancy Edwards (Use the ReportsTo column).
-- You will need to query the employee table to find the Id for Nancy Edwards
SELECT * FROM employee WHERE reports_to = 2;

-- Count how many people live in Lethbridge.
SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge';
