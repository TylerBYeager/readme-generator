const fs = require('fs');
const inquirer = require("inquirer");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description  
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Contributions

  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  - ${data.email}
  - Github.com/${data.username}
`;
}

module.exports = generateMarkdown;
