# readme-generator
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description  
  This is a readme generator created through node.js. By answering a few prompts, a user's information will be stored into the corresponding readme location. These can be as long or as short as you would like for them to be. 

  ## Code Snippets
  Here are some code snippets and what they accomplished. First is a small section of the code that created the questions. The code continues but it is a bit long. 
  ```
  const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
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
  ```

  Next is the code that contains the function that generated the markdown file. 
  ```
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
```

  Lastly, this code utilized inquirer, which a user will need to install to make this work, to store the user's responses into a usable format. These were then placed into an fs.writeFile function to write the file. 
  ```
  inquirer
 .prompt(questions)
 .then((response) => {
    // console.log(response);
    let genMarkdown = markdown(response);
    fs.writeFile("readme.md", genMarkdown, (err) => {
        err ? console.error(err) : console.log("Success");
    })
  ```

  ## Installation
  To install:
  ```
  Once you have a working SSH key added to your Github account, go to the readme-generator repository. Click the green "code" button on the top right and clonecopy the @github.com link with the SSH key option to your clipboard. 
  ```

  Next, 
  ```
  Open Gitbash or Terminal and navigate to a directory that you would like to add the cloned repository. Once in your desired directory type in
  "git clone 'right click to paste'" and press enter. This will clone the repository onto your personal machine.
  ```
  Lastly, 
  ```
  Type 'ls' into your Gitbash or Terminal to see a list of items within the directory. If you have done the previous steps correctly then you should see a respository titled "readme-generator". Simply type in "code ." to open it in your code editor of choice and have fun!

  ```

  ## Usage
  Any user can access this generator to create a basic readme for any possible project. Of course, a user may want additional information and is free to edit the generate markdown function in order to get their desired results.  

  ## Built With
  * [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [NODE.JS](https://nodejs.org/en/)

  ## Deployed Link
* [See the Live Site!](https://tylerbyeager.github.io/readme-generator/) However, nothing will pop up as there is not html file. 

## Authors

* **Tyler Brian Yeager**

- [Link to Repo Site](https://github.com/TylerBYeager/readme-generator)
- [Link to Github](https://github.com/TylerBYeager/tylerbyeager.github.io)
- [Link to LinkedIn](https://www.linkedin.com/in/tyler-yeager-611926213/)

  ## Contributions

  UC Berkeley Coding Bootcamp & my pair programmers this week

  ## License
  ![License](https://img.shields.io/badge/License-Apache-blue.svg)

  ## Questions
  - wow_d2@hotmail.com
