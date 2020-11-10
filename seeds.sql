INSERT INTO department (name)
VALUES ("sales"),("engineering"),("finance"),("legal");

INSERT INTO role (title, salary, department_id)
VALUES ("salesperson", 80000, 1), ("sales lead", 100000, 1), ("lead engineer", 60000, 2), ("senior engineer", 100000, 2), ("accountant", 70000, 3), ("lead accountant", 60000, 3), ("paralegal", 20000, 4), ("lawyer", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
("Abbey", "Apple", 2, null), 
("Abbey", "Brown", 4, null), 
("Abbey", "Cat", 6, null), 
("Dustin", "Coop", 8, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
("Brown", "Abbey", 1, 1), 
("Brown", "Bush", 1, 1), 
("Brown", "Cup", 3, 2), 
("Cathy", "Abbey",3, 2), 
("Cathy", "Baby", 5, 3), 
("Cathy", "Chatty", 5, 3), 
("Dustin", "Abbey", 7, 4), 
("Dustin", "Brown", 7, 4);