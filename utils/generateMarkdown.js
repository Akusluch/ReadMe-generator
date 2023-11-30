// TODO: Create a function that returns a license badge based on which license is passed in
const licensesDetails = require('./licenseDetails')
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  let result = licensesDetails.filter(licenseDetail => licenseDetail.name === license);
  return result[0].badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  let result = licensesDetails.filter(licenseDetail => licenseDetail.name === license);
  return result[0].link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  This application is licensed under [${license}](${renderLicenseLink(license)}) license. Click the link for license rights and limitations.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Contribute
  ${data.contribute}
  ## Tests
  ${data.tests} 
  ## Questions
  [Link to my GitHub Profile](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
