#NCARB Certification Search
[![Build Status](https://travis-ci.org/excellalabs/ncarb-certification-search.svg)](https://travis-ci.org/excellalabs/ncarb-certification-search) 
[![Coverage Status](https://coveralls.io/repos/excellalabs/ncarb-certification-search/badge.svg?branch=master&service=github)](https://coveralls.io/github/excellalabs/ncarb-certification-search?branch=master)

This is a sample AngularJS application designed to retrieve certifications from the public NCARB API.  Users have the
ability to filter the data by the certification holder's First Name, Last Name, City, and/or State.

## Implementation Details

This application is built on [AngularJS](https://angularjs.org/) 1.4, and uses the 
[Angular UI Router](https://github.com/angular-ui/ui-router) for routing, as well as 
[NgTable](https://github.com/esvit/ng-table) to render the results of the user's query.

## Development and Testing

To get started with development, clone the code and run:

```
npm start
```

This will install all necessary packages and start the development server.  Once the server is running, you can access 
the site at [http://localhost:8000/app/](http://localhost:8000/app/).

There are both unit and integration tests in this project.  All tests are written in 
[Jasmine](https://jasmine.github.io/).  We use [Karma](https://karma-runner.github.io) to run the unit tests and 
[Protractor](https://angular.github.io/protractor/) for the integration tests.

### Unit Tests

The simlest way to run the unit tests is by running the command:

```
npm test
```

Karma will run all of the tests and continue to watch for changes in the source and test files, automatically running
the tests again when it detects a change.  Leaving this running during development helps catch broken tests earlier.

If you just want Karma to run all tests one time and exit simply use the following command instead:

```
npm run test-single-run
```

### Integration Tests

These tests ensures all layers of the site work together as expected.  They are found in the `e2e-tests\scenarios.js`
 file.  Start by running the site in the development web server, then run:
 
 ```
 npm run protractor
 ```
 
 Note, the current configuration uses Firefox to run the tests.  The latest version of Chrome broke support for the
 Java plugin, so WebDriver doesn't load properly in Chrome.