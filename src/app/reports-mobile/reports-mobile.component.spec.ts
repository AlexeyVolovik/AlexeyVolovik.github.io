import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsMobileComponent } from './reports-mobile.component';

describe('ReportsMobileComponent', () => {
  let component: ReportsMobileComponent;
  let fixture: ComponentFixture<ReportsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
