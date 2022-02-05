export class RegexEnum {
    public static FORMAT_DATE: RegExp = /(\d{2})(\d{2})(\d{4})/g;
    public static FORMAT_DATE_WITH_VERTICAL_SLASH: RegExp = /(\d{1,4})-(\d{1,4})-(\d{1,4})/g;
    public static FORMAT_DATE_WITH_DIAGONAL_SLASH: RegExp = /\d{1,4}-\d{1,4}-\d{1,4}/g;
  }