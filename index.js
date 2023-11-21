// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are your installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are your contribution guidlines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your test instructions?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error){
            console.log(error)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then (answers => {
            console.log(answers);
            return generateMarkdown(answers)
        })
        .then (pageMarkdown => {
            writeToFile('./test/README.md', pageMarkdown);
            console.log('README.md created')
        })
}

// Function call to initialize app
init();
