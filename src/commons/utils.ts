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

export function dateCheck(dateNumber: number, typeDate: string):string {
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
export function dateSplitter(dateData:string):String[]{

    if (dateData.match(RegexEnum.FORMAT_DATE)) {
        console.log("splitted")
        return dateData.split(RegexSplitter.FORMAT_SPLITTER_DATE)
    }
    if (dateData.match(RegexEnum.FORMAT_DATE_WITH_VERTICAL_SLASH)) {
        console.log("splitted")
        return dateData.split(RegexSplitter.FORMAT_SPLITTER_VERTICAL_SLASH)
    }
    if (dateData.match(RegexEnum.FORMAT_DATE_WITH_DIAGONAL_SLASH)) {
        console.log("splitted")
        return dateData.split(RegexSplitter.FORMAT_SPLITTER_DIAGONAL_SLASH)
    }
    console.log("splittednt")

    return dateData.split(RegexSplitter.FORMAT_SPLITTER_DATE)

}