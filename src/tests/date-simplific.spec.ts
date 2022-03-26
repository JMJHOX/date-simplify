import { format } from 'date-fns';
import { dateSimplify } from '..';

describe('DateSimplifyService', () => {
  let service = dateSimplify;


  /*
  * getAgeLimitUTC
  */
  test('should return correct date for restrict users below 18 years old on 1991 on UTC', () => {
    const serviceResult = service.getAgeLimitOnUTC(18, '2009');
    expect(serviceResult).toEqual('1991');
  });
  test('should return correct date for restrict users below 18 years old on any date on UTC', () => {
    const serviceResult = service.getAgeLimitOnUTC(5);
    const dateComp = String(new Date().getUTCFullYear() - Number(5));
    expect(serviceResult).toEqual(dateComp);
  });

  test('should return error when invalid age is introduced on UTC', () => {
    const serviceResult = service.getAgeLimitOnUTC(-1);
    expect(serviceResult).toBe('Invalid Age');
  });

  test('should return errorwhen invalid input is introduced on UTC', () => {
    const serviceResult = service.getAgeLimitOnUTC(NaN);
    expect(serviceResult).toBe('Invalid Range');
  });

  /*
   * getAgeLimitLocal
  *
  * 
  */


  test('should return correct date for restrict users below 18 years old on 1990 on Local', () => {
    const limitAge = 18;
    const limitYear = '2009';
    const serviceResult = service.getAgeLimitOnLocal(limitAge, limitYear);
    var actualYear = new Date(limitYear).getFullYear();
    const firstDayOfYear = new Date(actualYear, 0, 1);
    var DiffYear = Number(firstDayOfYear.getFullYear() - Number(limitAge));
    var LocalYearObtained = format(new Date(DiffYear, 0, 1), 'yyyy');
    expect(serviceResult).toEqual(LocalYearObtained);
  });
  test('should return correct date for restrict users below 18 years old on any date on Local', () => {
    const serviceResult = service.getAgeLimitOnLocal(5);
    const dateComp = String(new Date().getFullYear() - Number(5));
    expect(serviceResult).toEqual(dateComp);
  });

  test('should return error when invalid age is introduced on Local', () => {
    const serviceResult = service.getAgeLimitOnLocal(-1);
    expect(serviceResult).toBe('Invalid Age');
  });

  test('should return errorwhen invalid input is introduced on Local', () => {
    const serviceResult = service.getAgeLimitOnLocal(NaN);
    expect(serviceResult).toBe('Invalid Range');
  });

 /*
   * dateFormatISO
   */


  /*
   * dateIsValid
   */


  test('should  check if date is correct ', () => {
    const serviceResult = service.dateIsValid('12', '12', '1998');
    expect(serviceResult).toBe(true);
  });

  test('should  check if date is false ', () => {
    const serviceResult = service.dateIsValid('0', '12', '1998');
    expect(serviceResult).toBe(false);
  });

  test('should  fix bad date if date is wrong 1', () => {
    const serviceResult = service.dateIsValidFix('0', '13', '1998');
    expect(serviceResult).toBe('1/12/1998');
  });

  test('should  fix bad date if date is wrong 2 ', () => {
    const serviceResult = service.dateIsValidFix('32', '0', '1998');
    expect(serviceResult).toBe('31/1/1998');
  });
  test('should  fix bad date if date is wrong 3 ', () => {
    const serviceResult = service.dateIsValidFix('-1', '0', '1998');
    expect(serviceResult).toBe('1/1/1998');
  });
  test('should return bad date if a error has occured ', () => {
    const serviceResult = service.dateIsValidFix('12', '1', '1');
    expect(serviceResult).toBe('12/1/1');
  });


  /*
 * dateFormatNew
 */

  test('should return date format new function date 1', () => {
    const serviceResult = service.dateFormat('02/23/1998', 'ddMMyyyy')
    expect(serviceResult).toBe('02231998');
  });

  test('should return date format new function date 2', () => {
    const serviceResult = service.dateFormat('02-23-1998', 'ddMMyyyy')
    expect(serviceResult).toBe('02231998');
  });

  test('should return date format new function date 3', () => {
    const serviceResult = service.dateFormat('02231998', 'ddMMyyyy')
    expect(serviceResult).toBe('02231998');
  });

  test('should return date format new function date 4', () => {
    const serviceResult = service.dateFormat('02-23-1998', 'dd-MM-yyyy')
    expect(serviceResult).toBe('02-23-1998');
  });

  test('should return date format new function date 5', () => {
    const serviceResult = service.dateFormat('02-23-1998', 'dd/MM/yyyy')
    expect(serviceResult).toBe('02/23/1998');
  });

  test('should return date format new function date 6', () => {
    const serviceResult = service.dateFormat('02-23-1998', 'dd.MM.yyyy')
    expect(serviceResult).toBe('02-23-1998');
  });

  test('should return date format new function date ISO 1', () => {
    const serviceResult = service.dateFormat('02-23-1998', 'ISO')
    expect(serviceResult).toBe(new Date('02-23-1998').toISOString());
  });

  test('should return date format new function date ISO 2', () => {
    const serviceResult = service.dateFormat('02/23/1998', 'ISO')
    expect(serviceResult).toBe(new Date('02/23/1998').toISOString());
  });

  test('should return date format new function date ISO 3', () => {
    const serviceResult = service.dateFormat('02-23-1998', 'ISO')
    expect(serviceResult).toBe(new Date('02/23/1998').toISOString());
  });

  test('should return date format new function date UNIX 1', () => {
    const serviceResult = service.dateFormat('02-23-1998', 'UNIX')
    expect(serviceResult).toBe(888192000000);
  });


  test('should return date format with unixFormatter01', () => {
    const serviceResult = service.unixFormat(1648313180 * 1000, 'dd-MM-yyyy')
    expect(serviceResult).toBe("26-03-2022");
  });

  test('should return date format with unixFormatter02', () => {
    const serviceResult = service.unixFormat(1648313180 * 1000, 'dd/MM/yyyy')
    expect(serviceResult).toBe("26/03/2022");
  });

  test('should return date format with unixFormatter03', () => {
    const serviceResult = service.unixFormat(1648313180 * 1000, 'ddMMyyyy')
    expect(serviceResult).toBe("26032022");
  });

  test('should return date format with unixFormatter04', () => {
    const serviceResult = service.unixFormat(1648313180 * 1000, 'rAMEM')
    expect(serviceResult).toBe("Format not found");
  });

  test('should return date format with unixFormatter05', () => {
    const serviceResult = service.unixFormat(1648313180 * 1000, 'ISO')
    expect(serviceResult).toBe("Format not found");
  });

});