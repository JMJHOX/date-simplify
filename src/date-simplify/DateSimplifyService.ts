import { format, isValid } from 'date-fns';
import { checkDateMatch, dateCheck, dateSplitter } from '../commons/utils';
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


export function dateFormatNew(dateRequest: string, formatStyle: string): string {

    let [day, month, year] = dateSplitter(dateRequest)


    switch (formatStyle) {
        case 'ddMMyyyy': {
            console.log("a")
            return `${day}${month}${year}`
        }
        case 'dd-MM-yyyy': {
            console.log("b")
            return `${day}-${month}-${year}`
        }
        case 'dd/MM/yyyy': {
            console.log("c")
            return `${day}/${month}/${year}`
        }
        default: {
            console.log("d")
            return dateRequest
        }
    }
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




