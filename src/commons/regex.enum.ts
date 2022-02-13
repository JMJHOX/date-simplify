export class RegexEnum {
  public static FORMAT_DATE: RegExp = /(\d{2})(\d{2})(\d{4})/g;
  public static FORMAT_DATE_WITH_VERTICAL_SLASH: RegExp = /(\d{1,4})-(\d{1,4})-(\d{1,4})/g;
  public static FORMAT_DATE_WITH_DIAGONAL_SLASH: RegExp = /^(\d{1,4})\/(\d{1,4})\/(\d{1,4})$/;

  public static FORMAT_DATE__SLASH: RegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
}
export class RegexSplitter {
  public static FORMAT_SPLITTER_DATE: string = "/(.{2})(.{2})(.{4})/";
  public static FORMAT_SPLITTER_VERTICAL_SLASH: string = "-"
  public static FORMAT_SPLITTER_DIAGONAL_SLASH: string = "/"
}
