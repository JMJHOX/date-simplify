import { Injectable } from '@angular/core';
import { format, isValid } from 'date-fns';
import { RegexEnum } from '../commons/enums/regex.enum';

@Injectable({
  providedIn: 'root'
})
export class DateSimplifyService {
  public age = 0;
  public DiffYear = 0;
  public actualYear = 0;
  public argsCheck = 'check';
  constructor() { }

  public async getRangeLimit(dateRangeRequest: any): Promise<string> {
    if (dateRangeRequest.ChangeDate) {
      this.actualYear = new Date(dateRangeRequest.ChangeDate).getFullYear()
    }
    if (!dateRangeRequest.ChangeDate) {
      this.actualYear = new Date().getFullYear()
    }


    if (dateRangeRequest) {
      if (dateRangeRequest.ageLimit == 0 || !dateRangeRequest) {
        return 'Invalid Age'
      }
      const firstDayOfYear = new Date(this.actualYear, 0, 1);
      this.DiffYear = Number(firstDayOfYear.getUTCFullYear() - Number(dateRangeRequest.ageLimit));
      return format(new Date(this.DiffYear, 0, 1), 'yyyy')
    }
    return "Invalid Range";


  }
  public dateFormat(documentFormat: string): string {
    if (documentFormat) {
      if (documentFormat.match(RegexEnum.FORMAT_DATE)) {
        documentFormat = documentFormat.replace(RegexEnum.FORMAT_DATE, "$1/$2/$3");

      }
      if (!isValid(new Date(documentFormat))) {
        return documentFormat;
      }

      return format(new Date(documentFormat), 'yyyy/dd/MM')
    }
    return 'Error'
  }

  public dateIsValid(dateRequest: any) {
    try {
      if (dateRequest.args) {
        this.argsCheck = dateRequest.args
      }

      var dayParser = Number(dateRequest.day)
      var monthParser = Number(dateRequest.month)
      var yearParser = Number(dateRequest.year)
      if (this.argsCheck == "check") {
        return isValid(new Date(`${dateRequest.day}/${dateRequest.month}/${dateRequest.year}`))
      }
      if (this.argsCheck == "fixed") {
        if (Number(dateRequest.day) <= 0) {
          dayParser = dayParser + 1;
        }
        if (Number(dateRequest.day) >= 31) {
          dayParser = dayParser - 1;
        }

        if (Number(dateRequest.month) <= 0) {
          monthParser = monthParser + 1;
        }
        if (Number(dateRequest.month) >= 12) {
          monthParser = monthParser - 1;
        }
        return `${dayParser}/${monthParser}/${yearParser}`
      }

    }
    catch (e) {

      return 'error';
    }



  }
}




