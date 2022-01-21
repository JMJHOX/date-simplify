import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSimplifyComponent } from './date-simplify.component';

describe('DateSimplifyComponent', () => {
  let component: DateSimplifyComponent;
  let fixture: ComponentFixture<DateSimplifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSimplifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSimplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
