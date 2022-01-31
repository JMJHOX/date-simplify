export class RegexEnum {
    public static FORMAT_DATE: RegExp = /([0-9]{2})([0-9]{2})([0-9]{4})/g;
    public static FORMAT_DATE_WITH_VERTICAL_SLASH: RegExp = /([0-9]{1,4})-([0-9]{1,4})-([0-9]{1,4})/g;
    public static FORMAT_DATE_WITH_DIAGONAL_SLASH: RegExp = /[0-9]{1,4}-[0-9]{1,4}-[0-9]{1,4}/g;
  }