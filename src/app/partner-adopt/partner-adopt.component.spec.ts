import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAdoptComponent } from './partner-adopt.component';

describe('PartnerAdoptComponent', () => {
  let component: PartnerAdoptComponent;
  let fixture: ComponentFixture<PartnerAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAdoptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
