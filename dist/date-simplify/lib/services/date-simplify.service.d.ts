export declare class DateSimplifyService {
    private DiffYear;
    private actualYear;
    getRangeLimit(dateRange: number, ChangeDate?: string | ''): string;
    dateFormat(documentFormat: string): string;
    dateIsValid(day: string, month: string, year: string): boolean;
    dateIsValidFix(day: string, month: string, year: string): string;
}
