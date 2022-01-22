import { format, isValid } from 'date-fns';
import { RegexEnum } from '../commons/enums/regex.enum';


export class DateSimplifyService {

  private DiffYear = 0;
  private actualYear = 0;

 

  public getRangeLimit(dateRange: number, ChangeDate?: string ): string {

    if (ChangeDate) {
      this.actualYear = new Date(ChangeDate).getUTCFullYear()
    }
    if (!ChangeDate ) {
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

  public dateIsValid(  day: string, month: string, year: string): boolean {
    return isValid(new Date(`${day}/${month}/${year}`))

  }
  public dateIsValidFix( day: string, month: string, year: string): string {

    try {
      var dayParser = Number(day)
      var monthParser = Number(month)
      var yearParser = Number(year)

      if (Number(day) <= 0) {
        dayParser = dayParser + 1;
      }
      if (Number(day) > 31) {
        dayParser = dayParser - 1;
      }

      if (Number(month) <= 0) {
        monthParser = monthParser + 1;
      }
      if (Number(month) > 12) {
        monthParser = monthParser - 1;
      }
      return `${dayParser}/${monthParser}/${yearParser}`
    }
    catch (e) {

      return 'error';
    }



  }


}




