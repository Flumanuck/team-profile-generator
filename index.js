const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const path = require("path");
const fs = require("fs");

const teamArray = [];

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
    ])
    .then(function (data) {
      const newManager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail
      );
      //add data.managerOfficeNo later
      teamArray.push(newManager);
      //console.log(teamArray);
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
    ])
    .then(function (data) {
      const newEngineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail
      );
      //add data.engineerGithub later
      teamArray.push(newEngineer);
      console.log(teamArray);
    });
}
function addNewEmployee() {}
