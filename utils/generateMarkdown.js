// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'GPL') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (license === 'BSD') {
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    } else {
        return ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT'
    } else if (license === 'Apache') {
        return 'https://opensource.org/licenses/Apache-2.0'
    } else if (license === 'GPL') {
        return 'https://www.gnu.org/licenses/gpl-3.0'
    } else if (license === 'BSD') {
        return 'https://opensource.org/licenses/BSD-3-Clause'
    } else {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return ''
    } else {
        return `## License
        This project is licensed under the ${license} license.`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
  return `# ${data.title}
  # Title  ${renderLicenseBadge(data.license)}
-----------------------------------------


  ## Table of Contents
-----------------------------------------
[Discription](#discription)  
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Contributions](#contributions)  
[Email](#email)  
[Content](#content)  
[GitHub](#GitHub)  
[Tests](#tests)  
[Questions](#questions)  




# Discription
${data.discription}

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.license}

# Contributions
${data.contributions}

# Tests
${data.tests}
    
# Content
${data.content}

## Questions
${data.questions}
-----------------------------------------

# GitHub 
${data.GitHub}; https://github.com/WashingtonUCF/

# Email
${data.email} is where you can reach me if you have additional questions.
  


  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  [Module7Video](https://youtu.be/pWRytZPwyBA);
`;
}

export default generateMarkdown;