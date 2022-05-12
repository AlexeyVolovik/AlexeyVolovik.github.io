import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMobileComponent } from './request-mobile.component';

describe('RequestMobileComponent', () => {
  let component: RequestMobileComponent;
  let fixture: ComponentFixture<RequestMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
