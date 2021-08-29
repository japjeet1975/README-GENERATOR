
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeFile = require('./utils/writeFile');
const generateReadme = require('./utils/generateMarkdown');
const fileName = "READMENEW.md"

// TODO: Create an array of questions for user input
const questions = () => {
	return inquirer.prompt([

//questions here
{
	type: 'input',
	name: 'name',
	message: 'What is your name?',
      },
      {
	  type: 'input',
	  name: 'github',
	  message: 'What is your github username? (Required)',
      },
      {
	  type: 'input',
	  name: 'email',
	  message: 'What is your email id? (Required)',
	  validate: value => {
	      if(value) {
		  return true;
	      }
	      else {
		  console.log('Please enter your email id.');
		  return false;
	      }
	  }
      },
      {
	  type: 'input',
	  name: 'projectTitle',
	  message: 'What is the title of your project? (Required)',
	  validate: projectNameInput => {
	      if(projectNameInput){
		  return true;
	      }
	      else {
		  console.log('Please enter the name of your project.');
		  return false;
	      }
	  }
      },
      {
	  type: 'input',
	  name: 'projectDesc',
	  message: 'Please input description of your input. (Required)',
	  validate: projectDescInput => {
	      if(projectDescInput){
		  return true;
	      }
	      else {
		  console.log("Please enter a description of your project.");
		  return false;
	      }
	  }
      },
      {
	  type: 'input',
	  name: 'installation',
	  message: 'What are the steps required to install your project?'
      },
      {
	  type: 'input',
	  name: 'contributing',
	  message: 'Please provide details about how others can contribute to this repo'
      },
      {
	  type: 'input',
	  name: 'usage',
	  message: 'Please provide instructions on how to use this app.'
      },
      {
	  type: 'input',
	  name: 'tests',
	  message: 'Please provide details about tests to run for your application.'
      },

      {type:'confirm',
      name: 'confirmLicense',
      message: 'Would you like to enter license type?',
      default: false
  },
  {
      type: 'list',
      name: 'license',
      message: 'Please enter the license type?',
      choices: ['MIT', 'ISC', 'Creative Commons', 'Mozilla'],
      when: ({ confirmLicense }) => confirmLicense
  }

	])
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

questions().then(userResponse => {
	console.log("input data=", userResponse);
        const markdown = generateReadme(userResponse);
          writeFile(fileName ,markdown);
})

