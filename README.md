# date-simplify
Set of tools that simplifies calculations about dates on your angular 


# Version
This library is working with Angular 13

# How to use it
To get Started, you have to import "DateSimplifyService" as a service within your Angular app:
```
import { DateSimplifyService } from '@jmjhox/date-simplify';
```

In your app.module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateSimplifyService } from 'projects/date-simplify/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DateSimplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And finally, in your component where it will be used:
```
import { Component, OnInit } from '@angular/core';
import { DateSimplifyService } from 'projects/date-simplify/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'date-workspace';
  constructor(private date_simply:DateSimplifyService){}
  ngOnInit(): void
  {}
}
```
# getRangeLimit
Is a method used to get the age limit of the user based on the actual date of the year or a custom date you want to use it from reference
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
this.date_simply.dateFormat('12121998')
It should Return 12/12/1998 on string format
```
# dateIsValid
method to check if a date is valid or not. it only returns false or true.
## How to use it
```
this.date_simply.dateIsValid('12','12','1998')
It should Return 12/12/1998 on string format
```

# dateIsValidFix
Checks if the date is valid, and attempts to fix the date automatically for yourself

```
Format:
dateIsValidFix(day: string, month: string, year: string)
```

## How to use it
```
this.date_simply.dateIsValidFix('12','12','1998')
It should Return 12/12/1998 on string format
```
