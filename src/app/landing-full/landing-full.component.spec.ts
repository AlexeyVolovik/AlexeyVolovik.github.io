import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFullComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingFullComponent;
  let fixture: ComponentFixture<LandingFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
