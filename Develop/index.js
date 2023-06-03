//imports all packages needed to function
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the title of your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a desciption.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter how to run your project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter contributions for your project.",
  },
  {
    type: "input",
    name: "testing",
    message: "Please enter test instructions for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revived' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 1.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username.",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Please enter your email address.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log(`Success`)
  );
}

// function to initialize app
function init() {
  inquirer
    .prompt(questions) //allows user to respond to questions
    .then((response) => writeToFile(`README.md`, response)); //answers returned as promise then passed through to the file  "Named README for test"
}

// Function call to initialize app
init();
