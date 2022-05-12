import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerMobileComponent } from './volunteer-mobile.component';

describe('VolunteerMobileComponent', () => {
  let component: VolunteerMobileComponent;
  let fixture: ComponentFixture<VolunteerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
