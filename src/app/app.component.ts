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
  ngOnInit(): void {
      console.log(this.date_simply.getRangeLimit(18))
      console.log(
        this.date_simply.dateIsValid('12','12','1997'),
        this.date_simply.dateIsValidFix('01','00','1997')
        )
  }

}
