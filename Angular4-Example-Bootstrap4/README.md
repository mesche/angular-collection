# Angular4-Example-Bootstrap4

This project was generated with

- [Angular CLI](https://github.com/angular/angular-cli)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Sass](http://www.sass-lang.com)
- [Protractor](http://www.protractortest.org)
- [Karma](http://karma-runner.github.io)
- [Jasmine](https://jasmine.github.io)
- [Jasmine Spec Reporter](https://github.com/bcaudan/jasmine-spec-reporter)
- [Karma-Jasmine HTML Reporter](https://github.com/taras42/karma-jasmine-html-reporter)
- [Karma Coverage Istanbul Reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter)
- [Karma Chrome Launcher](https://github.com/karma-runner/karma-chrome-launcher)
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap)


## Requirements

 **Install following tools**

- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [Angular CLI](https://github.com/angular/angular-cli)

 *Optional*

- [Yarn](https://yarnpkg.com)


## Setup steps of this project

### 1. Create a new Angular 2 project with the Angular CLI

```sh
    ng new 'Angular4-Example-Bootstrap4' --ng4 true --skip-install true --style scss
```

### 2. Install dependencies with npm

Run the following commands to install the dependencies as modules within your project.

```sh
    npm install bootstrap@next --save

    npm install ngx-bootstrap --save
```

Run the following command to install all additional dependencies as modules within your project.

```sh
    npm install
```

After installation you can find the modules in your `./node_modules` directory.


### 3. Setup Bootstrap

#### Step 1

Create an empty file `_variables.scss` in `src` directory and add the following lines in `styles.scss`:

```scss
  @import 'variables';
  @import '../node_modules/bootstrap/scss/bootstrap';
```

In Bootstrap 4 it is easy to overriding the default variables within the _variables.scss file. Add the appropriate variable, modify the value, and recompile your Sass to change our default values.

#### Step 2

Open `/src/index.html` and add the following markup into the body before the `app-root` tag to let ngx-bootstrap know, that you are using Bootstrap 4.

```html
  <!-- Enable bootstrap 4 theme -->
  <script>window.__theme = 'bs4';</script>
```

#### Step 3

Open `src/app/app.module.ts` and add

```typescript
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
...

@NgModule({
   ...
   imports: [BsDropdownModule.forRoot(), ... ],
    ...
})
```

#### Step 4

Open `src/app/app.component.html` and add the following lines:

```html
    <h1>{{title}}</h1>
    <div class="btn-group" dropdown>
        <button dropdownToggle type="button" class="btn btn-primary dropdown-toggle">
            Dropdown-Button <span class="caret"></span>
        </button>
        <ul *dropdownMenu class="dropdown-menu" role="menu">
            <li role="menuitem"><a class="dropdown-item" href="#">Action One</a></li>
            <li role="menuitem"><a class="dropdown-item" href="#">Action Two</a></li>
            <li role="menuitem"><a class="dropdown-item" href="#">Action Three</a></li>
            <li class="divider dropdown-divider"></li>
            <li role="menuitem"><a class="dropdown-item" href="#">Action Four</a></li>
        </ul>
    </div>
```

#### Step 5

Execute `ng serve` command to run the app and ensure the dropdown button functions correctly.

## Local dependencies

Run `npm run inst` to install all modules listed as dependencies in package.json into the local `./node_modules` directory.
To confirm that the installation worked correctly, check to see that a `./node_modules` directory exists and that it contains a directory for the package(s) you installed.


## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Docker

Run `./etc/docker.sh build` to build the docker image.

Run `./etc/docker.sh start` to start the container in foreground or run `./etc/docker.sh startbg` start the container in background.

Run `./etc/docker.sh stop` to stop the container.

Run `./etc/docker.sh remove` remove the container and the image.

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
