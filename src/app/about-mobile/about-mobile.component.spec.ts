import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMobileComponent } from './about-mobile.component';

describe('AboutMobileComponent', () => {
  let component: AboutMobileComponent;
  let fixture: ComponentFixture<AboutMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
