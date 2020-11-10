const myssql = require("mysql");
const inquirer = require ("inquirer");
const console = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    port: 8080,

    user: "root",

    password: "codydog",
    database: "personnel_cmsDB",
});

//connect to database

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connection successful! ID: " + connection.threadID + "\n");
    StaticRange();
    });

function(start) {
    inquirer.prompt({
        name: "menu",
        type: "list",
        message: "what do you want to do?",
        choices: [  "View All Departments", 
                    "View All Employees", 
                    "View all Roles", 
                    "Add Departments", 
                    "Add Roles", 
                    "Add Employees", 
                    "Update Employee Roles"
                ]
            })
        .then(function(answer) {
            switch (answer.menu) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Roles":
                addRoles();
                break;
            case "Add Employees":
                addEmployee();
                break;
            case "Update Employee Role";
                updateEmployeeRole();
                break;
    connection.end();
    }
    })}