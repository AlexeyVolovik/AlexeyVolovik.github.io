import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAdoptMobileComponent } from './partner-adopt-mobile.component';

describe('PartnerAdoptMobileComponent', () => {
  let component: PartnerAdoptMobileComponent;
  let fixture: ComponentFixture<PartnerAdoptMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAdoptMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerAdoptMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
