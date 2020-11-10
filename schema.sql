DROP DATABASE IF EXISTS personnel_cmsDB;

CREATE DATABASE personnel_cmsDB;

USE personnel_cmsDB;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
    );

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
    );

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES role employee(id)
    );

    INSERT INTO department (name)
    VALUES ("sales"),("engineering"),("finance"),("legal");

    INSERT INTO role (title, salary, department_id)
    VALUES ("salesperson", 80000, 1), ("sales lead", 100000, 1), ("lead engineer", 60000, 2), ("senior engineer", 100000, 2), ("accountant", 70000, 3), ("lead accountant", 60000, 3), ("lawyer", 60000, 4), ("paralegal", 20000, 4);


    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  ("Abbey", "Apple", 1, 4), ("Abbey", "Brown", 1, 4), ("Abbey", "Cat", 1, 4), ("Abbey", "Dog", 2,), ("Brown", "Abbey", 3, 2), ("Brown", "Bush", 3, 2), ("Brown", "Cup", 3, 2), ("Brown", "Dusk", 4,), ("Cathy", "Abbey",5, 12), ("Cathy", "Baby", 5, 12), ("Cathy", "Chatty", 5, 12), ("Cathy", "Dimple", 6,), ("Dustin", "Abbey", 7, 16), ("Dustin", "Brown", 7, 16), ("Dustin", "Coop", 7, 16), ("Dustin", "Downer", 7,);