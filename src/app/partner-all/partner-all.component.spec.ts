import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAllComponent } from './partner-all.component';

describe('PartnerAllComponent', () => {
  let component: PartnerAllComponent;
  let fixture: ComponentFixture<PartnerAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
