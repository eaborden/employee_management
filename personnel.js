const mysql = require("mysql");
const inquirer = require("inquirer");
// const console = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "codydog",
    database: "personnel_cmsDB"
});

//connect to database

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected successfully");
    start();
});


function start() {
    inquirer.prompt({
        name: "menu",
        type: "list",
        message: "what do you want to do?",
        choices: ["View All",
            "View All Departments",
            "View All Employees",
            "View all Roles",
            "Add Departments",
            "Add Roles",
            "Add Employees",
            "Update Employee Role",
            // "Exit"
        ]
    })
        .then(function (answer) {
            switch (answer.menu) {

                case "View All":
                    viewAll();
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View all Roles":
                    viewAllRoles();
                    break;
                case "Add Departments":
                    addDepartment();
                    break;
                case "Add Roles":
                    addRoles()
                    break;
                case "Add Employees":
                    addEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
            };
        })
};

function viewAll() {
    connection.query(("select emp.id, emp.first_name, emp.last_name, r.title, d.name as department, r.salary, concat(mngr.first_name,' ',mngr.last_name) as manager from employee emp left join employee mngr on emp.manager_id = mngr.id left join role r on emp.role_id = r.id left join department d on d.id = r.department_id;"),
        function (err, res) {
            if (err) throw err;
            console.table(res);
            start();
        });
};

function viewAllDepartments() {
    connection.query(("select * from department;"),
        function (err, res) {
            if (err) throw err;
            console.table(res);
            start();
        });
};

function viewAllRoles() {
    //console.log("am I working");
    connection.query(("select title from role;"),
        function (err, res) {
            if (err) throw err;
            console.table(res);
            start();
        });
};

function viewAllEmployees() {
    connection.query(("select first_name, last_name from employee;"),
        function (err, res) {
            if (err) throw err;
            console.table(res);
            start();
        });
};

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "firstname",
                type: "input",
                message: "Employee First Name?"
            },
            {
                name: "lastname",
                type: "input",
                message: "Employee Last Name?"
            },

            {
                name: "role",
                type: "input",
                message: "Employee Role?"
            },
            {
                name: "manager",
                type: "input",
                message: "Employee's Manager?"
            },
        ])
        .then(function (answer) {
            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);", [
                answer.firstname, answer.lastname, answer.role, answer.manager
            ],
                function (err, res) {
                    if (err) throw err;
                    //console.table(res);
                    start();

                });
        })
};


function addDepartment() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Department Name?"
        },
    ])
        .then(function (answer) {
            //console.log(answer)
            connection.query("INSERT INTO department (name) VALUES (?);", [
                answer.name
            ],

                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    start();

                });

        })
};

function addRoles() {

    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "Role Title?"
        },
        {
            name: "salary",
            type: "input",
            message: "Salary?"
        },
        {
            name: "department_id",
            type: "input",
            message: "Department ID?"
        },

    ])
        .then(function (answer) {
            //console.log(answer)
            connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?);", [
                answer.title, answer.salary, answer.department_id
            ],

                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    start();

                });

        })
};

//need to select employee from list
//update role
//

function updateEmployeeRole() {
 inquirer
        .prompt([

            {
                name: "last_name",
                type: "input",
                message: "Which employee do you want to update the role for?"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is the new role?"
            },

])
        .then(function (answer) {
            //console.log(answer)
            connection.query("UPDATE employee SET ? WHERE ?",
            [
                {
                    role_id: answer.role_id

                },
                {
                    last_name: answer.last_name
                }
            ],

                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    start();
                });

            })
    };
    