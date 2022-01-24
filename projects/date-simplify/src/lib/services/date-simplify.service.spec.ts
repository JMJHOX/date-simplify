import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { format } from 'date-fns';


import { DateSimplifyService } from './date-simplify.service';

describe('DateSimplifyService', () => {
  let service: DateSimplifyService;
   
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
  

      ],
      declarations: [  ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        DateSimplifyService
      ],
    })

    service = TestBed.inject(DateSimplifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return correct date for restrict users below 18 years old on 1991 on UTC', () => {
    const serviceResult= service.getDateRangeLimitUTC(18,'2009')
    expect(serviceResult).toEqual('1991');
  });
  it('should return correct date for restrict users below 18 years old on any date on UTC', () => {
    const serviceResult= service.getDateRangeLimitUTC(5)
    const dateComp = String(new Date().getUTCFullYear() - Number(5))
    expect(serviceResult).toEqual(dateComp);
  });

  it('should return error when invalid age is introduced on UTC', () => {
    const serviceResult= service.getDateRangeLimitUTC(-1)
    expect(serviceResult).toBe('Invalid Age');
  });

  it('should return errorwhen invalid input is introduced on UTC', () => {
    const serviceResult= service.getDateRangeLimitUTC(NaN)
    expect(serviceResult).toBe('Invalid Range');
  });



  it('should return correct date for restrict users below 18 years old on 1990 on Local', () => {
    const limitAge= 18;
    const limitYear= '2009';
    const serviceResult= service.getDateRangeLimitLocal(limitAge, limitYear)
      var actualYear = new Date(limitYear).getFullYear()
      const firstDayOfYear = new Date(actualYear, 0, 1);
      var DiffYear = Number(firstDayOfYear.getFullYear() - Number(limitAge));
      var LocalYearObtained= format(new Date(DiffYear, 0, 1), 'yyyy')
    expect(serviceResult).toEqual(LocalYearObtained);
  });
  it('should return correct date for restrict users below 18 years old on any date on Local', () => {
    const serviceResult= service.getDateRangeLimitLocal(5)
    const dateComp = String(new Date().getFullYear() - Number(5))
    expect(serviceResult).toEqual(dateComp);
  });

  it('should return error when invalid age is introduced on Local', () => {
    const serviceResult= service.getDateRangeLimitLocal(-1)
    expect(serviceResult).toBe('Invalid Age');
  });

  it('should return errorwhen invalid input is introduced on Local', () => {
    const serviceResult= service.getDateRangeLimitLocal(NaN)
    expect(serviceResult).toBe('Invalid Range');
  });




  it('should return date format 1', () => {
    const serviceResult= service.dateFormat('12121998')
    expect(serviceResult).toBe('1998/12/12');
  });

  it('should return error when is void', () => {
    const serviceResult= service.dateFormat('')
    expect(serviceResult).toBe('Error');
  });

  it('should return date format 2', () => {
    const serviceResult= service.dateFormat('11/12/1998')
    expect(serviceResult).toBe('1998/12/11');
  });

  it('should return date format 3', () => {
    const serviceResult= service.dateFormat('12.12.1998')
    expect(serviceResult).toBe('1998/12/12');
  });
  it('should return date format 4', () => {
    const serviceResult= service.dateFormat('1998.10.12')
    expect(serviceResult).toBe('1998/12/10');
  });

  it('should return same date format when is invalid but formatted', () => {
    const serviceResult= service.dateFormat('00121998')
    expect(serviceResult).toBe('00/12/1998');
  });

 

  it('should  check if date is correct ', () => {
    const serviceResult= service.dateIsValid('12','12','1998')
    expect(serviceResult).toBe(true);
  });

  it('should  check if date is false ', () => {
    const serviceResult= service.dateIsValid('0','12','1998')
    expect(serviceResult).toBe(false);
  });

  it('should  fix bad date if date is wrong 1', () => {
    const serviceResult= service.dateIsValidFix('0','13','1998')
    expect(serviceResult).toBe('1/12/1998');
  });

  it('should  fix bad date if date is wrong 2 ', () => {
    const serviceResult= service.dateIsValidFix('32','0','1998')
    expect(serviceResult).toBe('31/1/1998');
  });
  it('should  fix bad date if date is wrong 3 ', () => {
    const serviceResult= service.dateIsValidFix('-1','0','1998')
    expect(serviceResult).toBe('1/1/1998');
  });
  it('should return bad date if a error has occured ', () => {
    const serviceResult= service.dateIsValidFix('12','1','1')
    expect(serviceResult).toBe('12/1/1');
  });
});
