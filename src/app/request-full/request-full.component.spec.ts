import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFullComponent } from './request-full.component';

describe('RequestFullComponent', () => {
  let component: RequestFullComponent;
  let fixture: ComponentFixture<RequestFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
