# date-simplify
Set of tools that simplifies code about dates and time on your javascript & Typescript Applications!


# Version
## From Angular to javascript/Typescript
This library was originally designed to be working for Angular 13, but now it has be re-design to be used by any project that has javascript or Typescript.

# Install
You only have to install it using npm:
```
npm i @jmjhox/date-simplify
```

## How to use it
To get Started, you have to import "DateSimplify" like this form within your Angular app:
```
import { dateSimplify } from '@jmjhox/date-simplify'
```

And finally, in your component where it will be used:
```
import { Component, OnInit } from '@angular/core';
import { dateSimplify } from '@jmjhox/date-simplify'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'date-workspace';
  constructor(){}
  ngOnInit(): void
  {
     dateSimplify.dateFormat('12/12/1998')
  }
}
```
# getDateRangeLimitUTC
Is a method used to get the age limit of the user based on the actual date of the year or a custom date you want to use it from reference using UTC
## How to use it
It has two parameters: 
```
public getRangeLimit(dateRange: number, ChangeDate?: string)

dateRange: number(the number you want to limit)
ChangeDate?: string (the date you migh want to use from reference, the format is dd/mm/yyyy)
```

# getDateRangeLimitLocal
Is a method used to get the age limit of the user based on the actual date of the year or a custom date you want to use it from reference using your local time
## How to use it
It has two parameters: 
```
public getRangeLimit(dateRange: number, ChangeDate?: string)

dateRange: number(the number you want to limit)
ChangeDate?: string (the date you migh want to use from reference, the format is dd/mm/yyyy)
```

# dateFormat
Is a function that formats any date to yyyy/mm/dd , if for some reasons, the date is impossible to get, it returns the same date introduced.
## How to use it
```
dateSimplify.dateFormat('12121998')
```
It should Return 12/12/1998 on string format

# dateFormatISO
Is a function that formats any date to yyyy/mm/dd ISO FORMAT , if for some reasons, the date is impossible to get, it returns the same date introduced.
## How to use it
```
dateSimplify.dateFormat('12101998')
```
It should Return 1998-10-12T00:00:00.000Z on string format

# dateIsValid
method to check if a date is valid or not. it only returns false or true.
## How to use it
```
dateSimplify.dateIsValid('12','12','1998')
```
It should Return 12/12/1998 on string format


# dateIsValidFix
Checks if the date is valid, and attempts to fix the date automatically for yourself

```
Format:
dateSimplify.dateIsValidFix(day: string, month: string, year: string)
```

## How to use it
```
dateSimplify.dateIsValidFix('12','12','1998')
```

It should Return 12/12/1998 on string format


## Contributing
Thank you for considering contributing to Date-Simplify! The contribution guide can be found in the [Date-Simplify documentation]()



# License

Date-Simplify is licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Code of Conduct

In order to ensure that the Date-simplify community is welcoming to all, please review and abide by the [Code of Conduct]().

## Security Vulnerabilities

If you discover a security vulnerability within Date-simplify, please send an e-mail to Jose Aparicio via [josemiguelaparicio507@gmail.com](mailto:josemiguelaparicio507@gmail.com). All security vulnerabilities will be promptly addressed.
