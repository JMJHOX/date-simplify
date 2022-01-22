# date-simplify
Set of tools that simplifies calculations about dates on your angular app


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help



To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# How to use it
First, remember to use the library as a service in your app, importing this in any component:
import { DateSimplifyService } from '@jmjhox/date-simplify';
# getRangeLimit
Is a method used to get the age limit of the user based on the actual date of the year or a custom date you want to use it from reference
It has two parameters: 
dateRange: number(the number you want to limit)
ChangeDate?: string (the date you migh want to use from reference, the format is dd/mm/yyyy)


# dateFormat
Is a function that formats any date to yyyy/mm/dd , if for some reasons, the date is impossible to get, it returns the same date introduced.
this.date_simply.dateFormat('12121998')
# dateIsValid
method to check if a date is valid or not. it only returns false or true.
this.date_simply.dateIsValid('12','12','1998')

# dateIsValidFix
Checks if the date is valid, and attempts to fix the date automatically for yourself
this.date_simply.dateIsValidFix('12','12','1998')