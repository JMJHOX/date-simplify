import { format, isValid } from 'date-fns';
import { RegexEnum } from '../commons/enums/regex.enum';
import { DateLimit } from '../commons/enums/constants';

export class DateSimplifyService {

  private DiffYear = 0;
  private actualYear = 0;



  public getRangeLimit(dateRange: number, ChangeDate?: string): string {

    if (ChangeDate) {
      this.actualYear = new Date(ChangeDate).getUTCFullYear()
    }
    if (!ChangeDate) {
      this.actualYear = new Date().getUTCFullYear()
    }

    if (dateRange) {
      if (dateRange <= 0 || !dateRange) {
        return 'Invalid Age'
      }
      const firstDayOfYear = new Date(this.actualYear, 0, 1);
      this.DiffYear = Number(firstDayOfYear.getUTCFullYear() - Number(dateRange));
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

  public dateIsValid(day: string, month: string, year: string): boolean {
    return isValid(new Date(`${day}/${month}/${year}`))

  }
  public dateIsValidFix(day: string, month: string, year: string): string {

    try {
      let dayParser = this.dateCheck(Number(day),'day');
      let monthParser = this.dateCheck(Number(month),'month');
      let yearParser = Number(year)
      return `${dayParser}/${monthParser}/${yearParser}`
    }
    catch (e) {

      return 'error';
    }



  }
  private dateCheck(
    dateNumber: number,
    typeDate:string) {
    let numberParser = dateNumber;

    if (dateNumber < DateLimit.DATE_LIMIT_MIN) {
      dateNumber = Math.abs(numberParser);
      numberParser = Math.abs(numberParser);
    }
    if (typeDate == 'day' && dateNumber > DateLimit.DATE_DAY_MAX) {
      for (let i = 0; i < (dateNumber-DateLimit.DATE_DAY_MAX); i++) {
        numberParser--;
      }
      return numberParser;
    }

    if (typeDate == 'month' && dateNumber > DateLimit.DATE_MONTH_MAX) {
      for (let i = 0; i <  (dateNumber-DateLimit.DATE_MONTH_MAX); i++) {
        numberParser = numberParser - 1;
      }
      return numberParser;
    }

    if (dateNumber == DateLimit.DATE_LIMIT_MIN) {
      numberParser = numberParser + 1; 
      return numberParser;
    }
    return numberParser;

  }
}




