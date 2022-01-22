import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

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
  it('should return correct date for restrict users below 18 years old on 1991', () => {
    const serviceResult= service.getRangeLimit(18,'2009')
    expect(serviceResult).toEqual('1991');
  });
  it('should return correct date for restrict users below 18 years old on any date', () => {
    const serviceResult= service.getRangeLimit(5)
    const dateComp = String(new Date().getUTCFullYear() - Number(5))
    expect(serviceResult).toEqual(dateComp);
  });

  it('should return error when invalid age is introduced', () => {
    const serviceResult= service.getRangeLimit(-1)
    expect(serviceResult).toBe('Invalid Age');
  });

  it('should return errorwhen invalid input is introduced', () => {
    const serviceResult= service.getRangeLimit(NaN)
    expect(serviceResult).toBe('Invalid Range');
  });



  it('should return date format ', () => {
    const serviceResult= service.dateFormat('12121998')
    expect(serviceResult).toBe('1998/12/12');
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
});
