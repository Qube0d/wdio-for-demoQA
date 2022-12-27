# WebdriverTest

## Project with automated test cases on the demoqa site which is using Webdriver IO,Allure Report.

[![N|Solid](https://avatars.githubusercontent.com/u/72550141?s=48&v=4)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Tech

Integrated with:

- https://webdriver.io/docs/allure-reporter/
- https://webdriver.io/docs/selenium-standalone-service/
- https://www.npmjs.com/package/allure-commandline

## Installation

- Requires [Node.js](https://nodejs.org/) v14+ to run.
- Clone and checkout the github project

```sh
https://github.com/Qube0d/Test-with-allure-and-WDIO.git
```

- Go to the terminal and execute "npm install" inside the checked out folder

```sh
npm install
```

## Running tests

- Go to the terminal and execute to run tests in edge headless mode:

```sh
wdio
```

## Allure-reports

- Run to generate report after check (from package.json)

```sh
npm run allure:generate
```

- Run to open report (from package.json)

```sh
npm run allure:open
```
