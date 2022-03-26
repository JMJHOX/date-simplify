import { DateLimit } from "./constants"
import { RegexEnum, RegexSplitter } from "./regex.enum"

export function checkDateMatch(documentRequest: string): string {
    if (documentRequest.match(RegexEnum.FORMAT_DATE)) {
        return 'ddMMyyyy'
    }
    if (documentRequest.match(RegexEnum.FORMAT_DATE_WITH_VERTICAL_SLASH)) {
        return 'dd-MM-yyyy'
    }
    if (documentRequest.match(RegexEnum.FORMAT_DATE_WITH_DIAGONAL_SLASH)) {
        return 'dd/MM/yyyy'
    }
    return 'error'


}
export function dateFormatterUnix(
    [day, month, year]: string[],
    formatStyle: string): string | number {
    switch (formatStyle) {
        case 'ddMMyyyy': {

            return `${day}${month}${year}`
        }
        case 'dd-MM-yyyy': {

            return `${day}-${month}-${year}`
        }
        case 'dd/MM/yyyy': {

            return `${day}/${month}/${year}`
        }
        default: {

            return "Format not found";
        }
    }
}

export function dateCheck(dateNumber: number, typeDate: string): string {
    let numberParser = dateNumber;

    if (dateNumber < DateLimit.DATE_LIMIT_MIN) {
        dateNumber = Math.abs(numberParser);
        numberParser = Math.abs(numberParser);
    }
    if (typeDate == 'day' && dateNumber > DateLimit.DATE_DAY_MAX) {
        for (let i = 0; i < (dateNumber - DateLimit.DATE_DAY_MAX); i++) {
            numberParser--;
        }
        return String(numberParser);
    }

    if (typeDate == 'month' && dateNumber > DateLimit.DATE_MONTH_MAX) {
        for (let i = 0; i < (dateNumber - DateLimit.DATE_MONTH_MAX); i++) {
            numberParser = numberParser - 1;
        }
        return String(numberParser);
    }

    if (dateNumber == DateLimit.DATE_LIMIT_MIN) {
        numberParser = numberParser + 1;
        return String(numberParser);
    }
    return String(numberParser);

}
export function dateSplitter(dateData: string): string[] {

    if (dateData.match(RegexEnum.FORMAT_DATE)) {

        return [dateData.slice(0, 2), dateData.slice(2, 4), dateData.slice(4, 10)];
    }
    if (dateData.match(RegexEnum.FORMAT_DATE_WITH_VERTICAL_SLASH)) {

        return dateData.split(RegexSplitter.FORMAT_SPLITTER_VERTICAL_SLASH)
    }
    if (dateData.match(RegexEnum.FORMAT_DATE_WITH_DIAGONAL_SLASH)) {

        return dateData.split(RegexSplitter.FORMAT_SPLITTER_DIAGONAL_SLASH)
    }


    return dateData.split(RegexSplitter.FORMAT_SPLITTER_DATE)

}
export function unformtJointer(dateFile: string): string {

    return dateFile.replace(RegexEnum.FORMAT_DATE, "$1/$2/$3");
}
export function unFormtCheck(dateFile: string): boolean {
    if (dateFile.match(RegexEnum.FORMAT_DATE)) {
        return true
    }
    return false
}