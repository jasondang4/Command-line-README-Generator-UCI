
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines for your project.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions for your project.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
  },
];

function writeToFile(data) {
  fs.writeFileSync('README.md', data);
}

function generateREADME(answers) {
  const { title, description, installation, usage, license, contributing, tests, github, email } = answers;
  const licenseBadge = `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  const licenseSection = `## License

This project is licensed under the ${license} License.`;
  const questionsSection =`## Questions

If you have any questions, please reach out to me at [my email address](${email}). You can also find more of my work at [my GitHub profile](https://github.com/${github}).`;

  const readme = `# ${title}

${licenseBadge}

${description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

${installation}

${usage}

${licenseSection}

${contributing}

${tests}

${questionsSection}`;

  writeToFile(readme);
}

inquirer.prompt(questions).then(generateREADME);