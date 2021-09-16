# Angular Academy Course Registration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

This project is course registration from a registrar's or admin's persective.

Organizations: Departments
Groups: Courses
Members: Students

The registrar has the ability to add, edit, and delete courses. As well as the ability to add and remove students from a particular course.

## Technologies Used

PrimeNG, AngularCli, and Angular

## Development server

Open a command prompt and run a cd command to the file path where the capstone-project folder is located. Then run another command, `cd client\capstone-project`.
Run `ng serve` of `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Json Server

Open a node.js command promt and run a cd command to the file path where the capstone-project folder is located. Then run another command, `cd server` to reach the server folder.
Once youve reached the server folder run the command `node server.js` to start the json server. The default port should be 8082, but if not run the command `node server.js --p 8082`
to set the port number.

## API Endpoints

These are the specific endpoints used within my project:

GET, EDIT, AND ADD GROUPS: /api/groups, GET GROUP BY ID AND DELETE A GROUP: /api/groups/:id, DELETE MEMBER IN GROUP: /api/groups/:groupid/members/:memberid, ADD MEMBER TO GROUP: /api/groups/:groupid/members

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
