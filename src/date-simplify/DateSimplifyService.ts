import { format, isValid } from 'date-fns';
import { DateLimit } from '../commons/constants';
import { RegexEnum } from '../commons/regex.enum';



export function getDateRangeLimitUTC(dateRange: number, ChangeDate?: string): string {
    let DiffYear = 0;
    let actualYear = 0;

    if (ChangeDate) {
        actualYear = new Date(ChangeDate).getUTCFullYear();
    }
    if (!ChangeDate) {
        actualYear = new Date().getUTCFullYear();
    }

    if (dateRange) {
        if (dateRange <= 0 || !dateRange) {
            return 'Invalid Age';
        }
        const firstDayOfYear = new Date(actualYear, 0, 1);
        DiffYear = Number(firstDayOfYear.getUTCFullYear() - Number(dateRange));
        return format(new Date(DiffYear, 0, 1), 'yyyy');
    }
    return "Invalid Range";
}

export function getDateRangeLimitLocal(dateRange: number, ChangeDate?: string): string {
    let DiffYear = 0;
    let actualYear = 0;
    if (ChangeDate) {
        actualYear = new Date(ChangeDate).getFullYear();
    }
    if (!ChangeDate) {
        actualYear = new Date().getFullYear();
    }

    if (dateRange) {
        if (dateRange <= 0) {
            return 'Invalid Age';
        }
        const firstDayOfYear = new Date(actualYear, 0, 1);
        DiffYear = Number(firstDayOfYear.getFullYear() - Number(dateRange));
        return format(new Date(DiffYear, 0, 1), 'yyyy');
    }
    return "Invalid Range";
}

export function dateFormat(documentFormat: string): string | undefined {
    if (documentFormat) {
        if (documentFormat.match(RegexEnum.FORMAT_DATE)) {
            documentFormat = documentFormat.replace(RegexEnum.FORMAT_DATE, "$1/$2/$3");

        }
        if (!isValid(new Date(documentFormat))) {
            return documentFormat;
        }

        return format(new Date(documentFormat), 'yyyy/dd/MM');
    }
    return 'Error';
}

export function dateFormatNew(documentFormat: string, formatStyle: string, formatSeparation = ''): string {

    switch (checkDateMatch(formatStyle)) {
        case 'ddMMyyyy': {

            break;
        }
        case 'dd-MM-yyyy': {
            break;
        }
        case 'dd/MM/yyyy': {
            break;
        }
        default: {
            break;
        }
    }
}
function checkDateMatch(documentRequest: string): string {
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

export function dateFormatISO(documentFormat: string): string | undefined {
    if (documentFormat) {
        if (documentFormat.match(RegexEnum.FORMAT_DATE)) {
            documentFormat = documentFormat.replace(RegexEnum.FORMAT_DATE, "$1/$2/$3");

        }
        if (!isValid(new Date(documentFormat))) {
            return documentFormat;
        }

        return new Date(documentFormat).toISOString();
    }
    return 'Error';
}
export function dateIsValid(day: string, month: string, year: string): boolean {
    return isValid(new Date(`${day}/${month}/${year}`));
}

export function dateIsValidFix(day: string, month: string, year: string): string {
    let dayParser = dateCheck(Number(day), 'day');
    let monthParser = dateCheck(Number(month), 'month');
    let yearParser = Number(year);
    return `${dayParser}/${monthParser}/${yearParser}`;
}

function dateCheck(
    dateNumber: number,
    typeDate: string) {
    let numberParser = dateNumber;

    if (dateNumber < DateLimit.DATE_LIMIT_MIN) {
        dateNumber = Math.abs(numberParser);
        numberParser = Math.abs(numberParser);
    }
    if (typeDate == 'day' && dateNumber > DateLimit.DATE_DAY_MAX) {
        for (let i = 0; i < (dateNumber - DateLimit.DATE_DAY_MAX); i++) {
            numberParser--;
        }
        return numberParser;
    }

    if (typeDate == 'month' && dateNumber > DateLimit.DATE_MONTH_MAX) {
        for (let i = 0; i < (dateNumber - DateLimit.DATE_MONTH_MAX); i++) {
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


