# [Module] client (Angular)

## Overview

_Please address the following points:_

-  _Which logic module uses this client?_
-  _What kinds of views does this client provide for your app?_
-  _Please provide screenshots._

## Dependencies

### npm libraries

-  _List of npm packages used_
-  _List of npm packages used_

### Backend endpoints used

-  _List of service endpoints used_
-  _List of service endpoints used_

## File structure

_Format:_

-  _`/dir`: Description of what's in this directory._

_Standard directories for Angular clients:_

-  `/components`: Components that do not have roots assigned to them.
-  `/helpers`: The client's helper classes.
-  `/pages`: Components that have roots assigned to them.
-  `/services`: Classes that provide data.
-  `/state`: State-related files and data models.
-  `/styles`: Contains styles specific to the client.
-  `routing.module.ts`: Where the client's routes are defined.
-  `ngModule`: Where components, services, pipes, etc. are defined.

## Local development

To **build** the project: 

`ng build {name-of-module}` 

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

To **run tests** using [Karma](https://karma-runner.github.io/0.13/index.html):

`ng test {name-of-module}`

To **run end-to-end tests** using [Protractor](https://www.protractortest.org/#/):

`ng e2e {name-of-module}`

## API documentation (Compodoc)

[Click here to go to the full API documentation (generated using Compodoc).](/{path-to-this-client}/documentation)

## License

Copyright &#169;2019 Humanitec GmbH.

This code is released under the [Humanitec Affero GPL](LICENSE).