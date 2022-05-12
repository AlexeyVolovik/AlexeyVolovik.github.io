import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateMobileComponent } from './donate-mobile.component';

describe('DonateMobileComponent', () => {
  let component: DonateMobileComponent;
  let fixture: ComponentFixture<DonateMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
