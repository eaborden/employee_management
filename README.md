# Employee Tracker

## GitHub Repository
[Repository Link](https://github.com/eaborden/employee_management)

## Project Description
Create a content management system for managing staff.  The system allow a user to view all of the employees, departments, and roles, add employees, roles, and departments.  In addition be able to make changes to the employee roles.

## Table of Contents
[Required Elements](#required-elements) \
[Requirements](#requirements) \
[Environment Setup](#environment-setup) \
[Project Images](#project-images) \
[Project Video Demonstration](#project-video-demonstration)

## Required Elements
[Inquirer package](https://www.npmjs.com/package/inquirer) \
[nodejs](https://nodejs.dev/) \
[mySQL - npm package](https://www.npmjs.com/package/mysql) \
[mySQL - open source database](https://www.mysql.com/) \
[MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

## Requirements
This is command line run application using node.  Using the inquirer package a command line prompt interface to allow views into the mySQL database utilizing the mySQL npm package.  
The database has three tables: employee, role, and department (see schema).  In order to create a view of all employee by manager, department, and role I utilized a series of self joins within the employee table. 
The database schema was developed and table created in mySQL workbench.   

## Environment Setup
1. Need to install nodejs.  The following link to the nodejs and npm documentation will help to install.  
[nodejs & npm installation](https://nodejs.dev/learn/how-to-install-nodejs)
2. After the node installation you will need to run the npm inquirer package.
3. Open mySQL workbench.   Open the schema.sql file and populate the database.
4. Open the terminal in your VS code, or the code editor of your chosing.
5. Run node personnel.js at the command prompt.

## Project Images
Image 1. The image below shows start of the application and first prompt results of all the employees by role, department, salary, and manager. 

![application](https://github.com/eaborden/employee_management/blob/master/Assets/images/application.PNG?raw=true)


---

Image 2. Database schema

![schema](https://github.com/eaborden/employee_management/blob/master/Assets/images/schema.PNG?raw=true)


## Project Video Demonstration

[Video demostration](https://drive.google.com/file/d/1tdkpuKcnnwPoNCT9de2mF-JVdi_o8BuU/view)
