import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFullComponent } from './volunteer.component';

describe('VolunteerComponent', () => {
  let component: VolunteerFullComponent;
  let fixture: ComponentFixture<VolunteerFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
