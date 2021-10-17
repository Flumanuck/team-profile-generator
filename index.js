const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const makeHtmlTemplate = require("./src/template");

const teamArray = [];
const htmlArray = [];

function makeManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's Email?",
      },
      {
        type: "input",
        name: "managerOfficeNo",
        message: "What is your manager's office number?",
      },
    ])
    .then(function (data) {
      const newManager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOfficeNo
      );
      teamArray.push(newManager);
      addNewEmployee();
    });
}
function makeEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's Email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's Github?",
      },
    ])
    .then(function (data) {
      const newEngineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.engineerGithub
      );
      teamArray.push(newEngineer);
      addNewEmployee();
    });
}
function makeIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's Email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
      },
    ])
    .then(function (data) {
      const newIntern = new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.internSchool
      );
      teamArray.push(newIntern);
      addNewEmployee();
    });
}
function addNewEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What employee do you want to add?",
        choices: ["Engineer", "Intern", "Manager", "None"],
      },
    ])
    .then(function (data) {
      const { employeeType } = data;
      if (employeeType == "Engineer") {
        makeEngineer();
      } else if (employeeType == "Intern") {
        makeIntern();
      } else if (employeeType == "Manager") {
        makeManager();
      } else {
        createHtml();
        writeToFile("dist/index.html", makeHtmlTemplate(htmlArray));
        return;
      }
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Success!");
    }
  });
}

function createHtml() {
  teamArray.forEach((employee) => {
    if (employee.getRole() == "Engineer") {
      const { name, id, email, github } = employee;

      htmlArray.push(
        `<div class="border"><h2 class="header">Engineer</h2><ul><li>${name}</li><li>${id}</li><li><a href="mailto:${email}">${email}</a></li><li><a href="https://github.com/${github}">${github}</a></li></ul></div>`
      );
    } else if (employee.getRole() == "Intern") {
      const { name, id, email, school } = employee;

      htmlArray.push(
        `<div class="border"><h2 class="header">Intern</h2><ul><li>${name}</li><li>${id}</li><li><a href="mailto:${email}">${email}</a></li><li>${school}</li></ul></div>`
      );
    } else if (employee.getRole() == "Manager") {
      const { name, id, email, officeNumber } = employee;

      htmlArray.push(
        `<div class="border"><h2 class="header">Manager</h2><ul class><li>${name}</li><li>${id}</li><li><a href="mailto:${email}">${email}</a></li><li>${officeNumber}</li></ul></div>`
      );
    }
  });
}

addNewEmployee();
