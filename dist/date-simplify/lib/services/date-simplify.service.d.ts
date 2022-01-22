export declare class DateSimplifyService {
    age: number;
    DiffYear: number;
    actualYear: number;
    argsCheck: string;
    getRangeLimit(dateRange: number, ChangeDate?: string | ''): string;
    dateFormat(documentFormat: string): string;
    dateIsValid(day: string, month: string, year: string): boolean;
    dateIsValidFix(day: string, month: string, year: string): string;
}
