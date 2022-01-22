import { format, isValid } from 'date-fns';

class RegexEnum {
}
RegexEnum.FORMAT_DATE = /([0-9]{2})([0-9]{2})([0-9]{4})/g;

class DateSimplifyService {
    constructor() {
        this.age = 0;
        this.DiffYear = 0;
        this.actualYear = 0;
        this.argsCheck = 'check';
    }
    getRangeLimit(dateRange, ChangeDate) {
        if (ChangeDate) {
            this.actualYear = new Date(ChangeDate).getFullYear();
        }
        if (!ChangeDate || ChangeDate != '') {
            this.actualYear = new Date().getFullYear();
        }
        if (dateRange) {
            if (dateRange == 0 || !dateRange) {
                return 'Invalid Age';
            }
            const firstDayOfYear = new Date(this.actualYear, 0, 1);
            this.DiffYear = Number(firstDayOfYear.getUTCFullYear() - Number(dateRange));
            return format(new Date(this.DiffYear, 0, 1), 'yyyy');
        }
        return "Invalid Range";
    }
    dateFormat(documentFormat) {
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
    dateIsValid(day, month, year) {
        return isValid(new Date(`${day}/${month}/${year}`));
    }
    dateIsValidFix(day, month, year) {
        try {
            var dayParser = Number(day);
            var monthParser = Number(month);
            var yearParser = Number(year);
            if (Number(day) <= 0) {
                dayParser = dayParser + 1;
            }
            if (Number(day) >= 31) {
                dayParser = dayParser - 1;
            }
            if (Number(month) <= 0) {
                monthParser = monthParser + 1;
            }
            if (Number(month) >= 12) {
                monthParser = monthParser - 1;
            }
            return `${dayParser}/${monthParser}/${yearParser}`;
        }
        catch (e) {
            return 'error';
        }
    }
}

/*
 * Public API Surface of date-simplify
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DateSimplifyService };
//# sourceMappingURL=jmjhox-date-simplify.mjs.map
