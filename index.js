import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'discription',
        message: 'What is the discription of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation of your project?',
    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does the usage of your project work?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license of your project?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to your project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email for your project?',
    },
    {
        type: 'input',
        name: 'content',
        message: 'What is the content of your project?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is the GitHub of your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests did you run on your project?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Include your GitHub username with a link to your GitHub profile in the questions section of your README.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
