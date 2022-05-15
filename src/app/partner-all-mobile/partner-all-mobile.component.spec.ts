import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAllMobileComponent } from './partner-all-mobile.component';

describe('PartnerAllMobileComponent', () => {
  let component: PartnerAllMobileComponent;
  let fixture: ComponentFixture<PartnerAllMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAllMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerAllMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
