// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (!license) {
    return "";
  } else {
    return "![License Badge](https://img.shields.io/badge/License-${license}-blueviolet)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (license) {
    return "";
  } else {
    return "- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else if (!license) {
    return "";
  } else {
    return "##License";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  return `# ${data.title}
  
  <br />

  ## Table of Contents <br />
  - [Description](#description)<br />
  - [Purpose](#purpose)<br />
  - [Installation](#installation)<br />
  - [Usage](#usage)<br />
  - [Authors](#authors)<br />
  - [Licensure](#licensure)<br />
  - [Features](#features)<br />
  - [How to Contribute](#contribute)<br />
  - [Testing](#testing)<br />
  - [Questions](#questions)<br />

<br />

## Description
${data.description}<br />

  <br />

## Purpose
${data.need}<br />

<br />

## Installation
${data.install}<br />

<br />

## Usage
${data.usage}<br />

<br />

## Authors
${data.authors}<br />

<br />

## Licensure
${data.licensure}<br />

<br />

## Features
${data.features}<br />

<br />

## How to Contribute
${data.contribute}<br />

<br />

## Testing
${data.tests}<br />

<br />

## Questions
${data.questions}<br />

`;
}

module.exports = generateMarkdown;
