import { format, isValid } from 'date-fns';
import { RegexEnum } from '../commons/enums/regex.enum';
export class DateSimplifyService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zaW1wbGlmeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGF0ZS1zaW1wbGlmeS9zcmMvbGliL3NlcnZpY2VzL2RhdGUtc2ltcGxpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHeEQsTUFBTSxPQUFPLG1CQUFtQjtJQUFoQztRQUNTLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGNBQVMsR0FBRyxPQUFPLENBQUM7SUF5RTdCLENBQUM7SUF2RVEsYUFBYSxDQUFDLFNBQWlCLEVBQUUsVUFBd0I7UUFDOUQsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUMzQztRQUVELElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQyxPQUFPLGFBQWEsQ0FBQTthQUNyQjtZQUNELE1BQU0sY0FBYyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1RSxPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtTQUNyRDtRQUNELE9BQU8sZUFBZSxDQUFDO0lBR3pCLENBQUM7SUFDTSxVQUFVLENBQUMsY0FBc0I7UUFDdEMsSUFBSSxjQUFjLEVBQUU7WUFDbEIsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDL0MsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUU1RTtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRTtnQkFDdEMsT0FBTyxjQUFjLENBQUM7YUFDdkI7WUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQTtTQUN0RDtRQUNELE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFFTSxXQUFXLENBQUcsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQzNELE9BQU8sT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFckQsQ0FBQztJQUNNLGNBQWMsQ0FBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFFN0QsSUFBSTtZQUNGLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzQixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0IsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRTdCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDM0I7WUFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3JCLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixXQUFXLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQzthQUMvQjtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDdkIsV0FBVyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7YUFDL0I7WUFDRCxPQUFPLEdBQUcsU0FBUyxJQUFJLFdBQVcsSUFBSSxVQUFVLEVBQUUsQ0FBQTtTQUNuRDtRQUNELE9BQU8sQ0FBQyxFQUFFO1lBRVIsT0FBTyxPQUFPLENBQUM7U0FDaEI7SUFJSCxDQUFDO0NBR0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQsIGlzVmFsaWQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBSZWdleEVudW0gfSBmcm9tICcuLi9jb21tb25zL2VudW1zL3JlZ2V4LmVudW0nO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRlU2ltcGxpZnlTZXJ2aWNlIHtcbiAgcHVibGljIGFnZSA9IDA7XG4gIHB1YmxpYyBEaWZmWWVhciA9IDA7XG4gIHB1YmxpYyBhY3R1YWxZZWFyID0gMDtcbiAgcHVibGljIGFyZ3NDaGVjayA9ICdjaGVjayc7XG5cbiAgcHVibGljIGdldFJhbmdlTGltaXQoZGF0ZVJhbmdlOiBudW1iZXIsIENoYW5nZURhdGU/OiBzdHJpbmcgfCAnJyk6IHN0cmluZyB7XG4gICAgaWYgKENoYW5nZURhdGUpIHtcbiAgICAgIHRoaXMuYWN0dWFsWWVhciA9IG5ldyBEYXRlKENoYW5nZURhdGUpLmdldEZ1bGxZZWFyKClcbiAgICB9XG4gICAgaWYgKCFDaGFuZ2VEYXRlIHx8IENoYW5nZURhdGUgIT0gJycpIHtcbiAgICAgIHRoaXMuYWN0dWFsWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIH1cblxuICAgIGlmIChkYXRlUmFuZ2UpIHtcbiAgICAgIGlmIChkYXRlUmFuZ2UgPT0gMCB8fCAhZGF0ZVJhbmdlKSB7XG4gICAgICAgIHJldHVybiAnSW52YWxpZCBBZ2UnXG4gICAgICB9XG4gICAgICBjb25zdCBmaXJzdERheU9mWWVhciA9IG5ldyBEYXRlKHRoaXMuYWN0dWFsWWVhciwgMCwgMSk7XG4gICAgICB0aGlzLkRpZmZZZWFyID0gTnVtYmVyKGZpcnN0RGF5T2ZZZWFyLmdldFVUQ0Z1bGxZZWFyKCkgLSBOdW1iZXIoZGF0ZVJhbmdlKSk7XG4gICAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKHRoaXMuRGlmZlllYXIsIDAsIDEpLCAneXl5eScpXG4gICAgfVxuICAgIHJldHVybiBcIkludmFsaWQgUmFuZ2VcIjtcblxuXG4gIH1cbiAgcHVibGljIGRhdGVGb3JtYXQoZG9jdW1lbnRGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGRvY3VtZW50Rm9ybWF0KSB7XG4gICAgICBpZiAoZG9jdW1lbnRGb3JtYXQubWF0Y2goUmVnZXhFbnVtLkZPUk1BVF9EQVRFKSkge1xuICAgICAgICBkb2N1bWVudEZvcm1hdCA9IGRvY3VtZW50Rm9ybWF0LnJlcGxhY2UoUmVnZXhFbnVtLkZPUk1BVF9EQVRFLCBcIiQxLyQyLyQzXCIpO1xuXG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQobmV3IERhdGUoZG9jdW1lbnRGb3JtYXQpKSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRGb3JtYXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUoZG9jdW1lbnRGb3JtYXQpLCAneXl5eS9kZC9NTScpXG4gICAgfVxuICAgIHJldHVybiAnRXJyb3InXG4gIH1cblxuICBwdWJsaWMgZGF0ZUlzVmFsaWQoICBkYXk6IHN0cmluZywgbW9udGg6IHN0cmluZywgeWVhcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzVmFsaWQobmV3IERhdGUoYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YCkpXG5cbiAgfVxuICBwdWJsaWMgZGF0ZUlzVmFsaWRGaXgoIGRheTogc3RyaW5nLCBtb250aDogc3RyaW5nLCB5ZWFyOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBkYXlQYXJzZXIgPSBOdW1iZXIoZGF5KVxuICAgICAgdmFyIG1vbnRoUGFyc2VyID0gTnVtYmVyKG1vbnRoKVxuICAgICAgdmFyIHllYXJQYXJzZXIgPSBOdW1iZXIoeWVhcilcblxuICAgICAgaWYgKE51bWJlcihkYXkpIDw9IDApIHtcbiAgICAgICAgZGF5UGFyc2VyID0gZGF5UGFyc2VyICsgMTtcbiAgICAgIH1cbiAgICAgIGlmIChOdW1iZXIoZGF5KSA+PSAzMSkge1xuICAgICAgICBkYXlQYXJzZXIgPSBkYXlQYXJzZXIgLSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoTnVtYmVyKG1vbnRoKSA8PSAwKSB7XG4gICAgICAgIG1vbnRoUGFyc2VyID0gbW9udGhQYXJzZXIgKyAxO1xuICAgICAgfVxuICAgICAgaWYgKE51bWJlcihtb250aCkgPj0gMTIpIHtcbiAgICAgICAgbW9udGhQYXJzZXIgPSBtb250aFBhcnNlciAtIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYCR7ZGF5UGFyc2VyfS8ke21vbnRoUGFyc2VyfS8ke3llYXJQYXJzZXJ9YFxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuXG4gICAgICByZXR1cm4gJ2Vycm9yJztcbiAgICB9XG5cblxuXG4gIH1cblxuXG59XG5cblxuXG5cbiJdfQ==