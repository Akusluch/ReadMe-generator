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
        type: 'list',
        name: 'license',
        message: 'What License applies to your application?',
        choices: [
            'None',
            'Apache license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'Creative Commons Zero v1.0 Universal',
            'Do What The F*ck You Want To Public License',
            'Eclipse Public License 1.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v3.0',
            'MIT',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]        
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
