import { Component } from '@angular/core';
import { DateSimplifyService } from 'projects/date-simplify/src/public-api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'date-workspace';
  constructor(private date_simply: DateSimplifyService) { }
  ngOnInit(): void {
  }

}
