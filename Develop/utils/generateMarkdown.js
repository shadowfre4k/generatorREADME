// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case `Apache License 2.0`:
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case `GNU General Public License v3.0`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case `MIT`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case `BSD 2-Clause 'Simplified' License`:
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    case `BSD 3-Clause 'New' or 'Revived' License`:
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case `Boost Software License 1.0`:
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case `Creative Commons Zero v1.0 Universal`:
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case `Eclipse Public License 1.0`:
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    case `None`:
      return ``;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  {
    // switch case for different licenses but since this is a reference they all say the same thing however
    // expected to have different returns for actual license
    switch (license) {
      case `Apache License 2.0`:
        return `This Project is licensed under the ${license} license.`;
      case `GNU General Public License v3.0`:
        return `This Project is licensed under the ${license} license.`;
      case `MIT`:
        return `This Project is licensed under the ${license} license.`;
      case `BSD 2-Clause 'Simplified' License`:
        return `This Project is licensed under the ${license} license.`;
      case `BSD 3-Clause 'New' or 'Revived' License`:
        return `This Project is licensed under the ${license} license.`;
      case `Boost Software License 1.0`:
        return `This Project is licensed under the ${license} license.`;
      case `Creative Commons Zero v1.0 Universal`:
        return `This Project is licensed under the ${license} license.`;
      case `Eclipse Public License 1.0`:
        return `This Project is licensed under the ${license} license.`;
      case `None`:
        return ``;
      default:
        return ``;
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

  ${data.installation}

## Usage

  ${data.usage}

## Contributions

  ${data.contribution}

## License

  ${data.license}
    
    ${licenseSection}


## Badges

  ${licenseBadge}

## Test

  ${data.testing}


## Questions

If you have any questions please contact me with the information below!

  ${data.emailAddress}

https://github.com/shadowfre4k${data.username}
`;
}

module.exports = generateMarkdown;
