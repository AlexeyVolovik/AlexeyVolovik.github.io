import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerDonateComponent } from './partner-donate.component';

describe('PartnerDonateComponent', () => {
  let component: PartnerDonateComponent;
  let fixture: ComponentFixture<PartnerDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
