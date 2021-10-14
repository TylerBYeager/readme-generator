const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const questions = [
    {
        type= "input",
        message: "What is your Github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your repo's name?",
        name: "repo",
    },
    {
        type: "input",
        message: "What is your project's name/title?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your project",
        name: "description",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter installation instructions",
        name: "install",
    },
    {
        type: "input",
        message: "Please enter usage information",
        name: "usage",
    },
    {
        type: "input",
        message: "Please add contributors or other contribution information",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please enter testing information",
        name: "test",
    },
]