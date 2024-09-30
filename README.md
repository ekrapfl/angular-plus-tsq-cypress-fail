# CypressFail

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Cypress

Run `npx cypress open` start the cypress tests.
Select Component Tests
Run the test

It will fail

To make it pass, either comment out the TSQ line in `fail.component.ts`, or run `window[0].cdr.detectChanges()` before it fails.
