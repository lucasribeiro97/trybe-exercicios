USE hr;

SELECT * FROM employees;

SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM employees AS Employee
INNER JOIN employees AS Manager
ON Employee.manager_id = Manager.employee_id;
    
SELECT
	CONCAT(employee.first_name, " ", employee.last_name) AS "Pessoa Colaboradora",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Gerente"
FROM employees AS employee
INNER JOIN employees AS manager
ON employee.manager_id = manager.employee_id
WHERE employee.department_id <> manager.department_id;

SELECT
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM employees AS manager
INNER JOIN employees AS employee
ON employee.manager_id = manager.employee_id
GROUP BY manager.employee_id;

