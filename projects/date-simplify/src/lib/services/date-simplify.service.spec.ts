import { TestBed } from '@angular/core/testing';

import { DateSimplifyService } from './date-simplify.service';

describe('DateSimplifyService', () => {
  let service: DateSimplifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateSimplifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
