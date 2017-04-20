#  Angular2-Quickstart-CLI

[![Build Status](https://travis-matrix-badges.herokuapp.com/repos/mesche/angular-collection/branches/master/1)](https://travis-ci.org/mesche/angular-collection)

This project was generated with 

- [Angular CLI](https://github.com/angular/angular-cli)
- [ClangFormat](https://github.com/angular/clang-format)
- [Sass](http://www.sass-lang.com)
- [TypeDoc](http://www.typedoc.org)
- [Webdriver Manager](https://github.com/angular/webdriver-manager)
- [Protractor](http://www.protractortest.org)
- [Karma](http://karma-runner.github.io)
- [Jasmine](https://jasmine.github.io)

## Requirements

 **Install following tools**

- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [Angular CLI](https://github.com/angular/angular-cli)


## Setup steps of this project

#### 1. Create new Angular2 project with Angular CLI

      ng new Angular2-Quickstart-CLI --style=scss


#### 2. Install dependencies with npm

Run the following commands to install the dependencies as modules within your project.

      npm install clang-format --save-dev

      npm install webdriver-manager --save-dev

      npm install typedoc --save-dev

      npm install rimraf --save-dev

After installation you can find the new modules in your `./node_modules` directory.

## Project structure

```
// production or development builds
├── dist  

// main application
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts

// static files (copied to the "dist" folder during build)
│   ├── assets
│   │   ├── .gitkeep


// settings for the different environments
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts

// main html and typescript file
│   ├── index.html
│   ├── main.ts

│   ├── favicon.ico

// polyfills needed by Angular
│   ├── polyfills.ts

//global style file
│   ├── styles.scss

// prepares test environment and runs all the unit tests
│   ├── test.ts

// typescript configuration file
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json

// end-to-end tests
├── e2e

// npm dependencies
├── node_modules

// Docker build file
├── Dockerfile

// configuration
├── .angular-cli.json
├── .clang-format
├── .dockerignore
├── .editorconfig
├── .gitignore
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── tsconfig.json
├── tslint.json
├── typedoc.json

// documentation etc.
├── LICENSE.txt
├── README.md

// scripts and misc.
├── etc
│   ├── cleanup.sh
│   ├── docker.sh
│   ├── yarn-install.sh
```

## Local dependencies

Run `npm run inst` to install all modules listed as dependencies in package.json into the local `./node_modules` directory.
To confirm that the installation worked correctly, check to see that a `./node_modules` directory exists and that it contains a directory for the package(s) you installed.

## Development server
Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
Run `npm run build_prod` for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm run start`.

## Running formatter

Run `npm run-script format` to execute the [ClangFormat](https://clang.llvm.org/docs/ClangFormat.html) to enforce code style for the TypeScript code.
See the `.clang-format` file for the format style configuration.

## Create documentation

Run `npm run docs` to execute the [TypeDoc](http://www.typedoc.org) to create the project documentation.
See the `typedoc.json` file for the options configuration.

## Clean up

Run `npm run clean` to clean up the npm cache and remove all temporary directories.

## Switch global package manager

[Yarn](https://www.yarnpkg.com) is a fast package manager that can be used instead of npm package manager. 
Run this command install Yarn globally:

      npm install yarn -g

After installation you can set Yarn as your default package manager.
Run `npm run set_yarn` to set the global package mangaer to [Yarn](https://www.yarnpkg.com).

Run `npm run set_npm` to set it back to [NPM](https://www.npmjs.com)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

----------------------------------
Markus Eschenbach  
[www.blogging-it.com](http://www.blogging-it.com)
