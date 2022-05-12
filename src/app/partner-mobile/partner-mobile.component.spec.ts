import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerMobileComponent } from './partner-mobile.component';

describe('PartnerMobileComponent', () => {
  let component: PartnerMobileComponent;
  let fixture: ComponentFixture<PartnerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
