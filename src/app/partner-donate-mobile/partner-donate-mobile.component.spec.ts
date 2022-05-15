import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerDonateMobileComponent } from './partner-donate-mobile.component';

describe('PartnerDonateMobileComponent', () => {
  let component: PartnerDonateMobileComponent;
  let fixture: ComponentFixture<PartnerDonateMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerDonateMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerDonateMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
