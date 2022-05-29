import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateFullComponent } from './donate.component';

describe('DonateComponent', () => {
  let component: DonateFullComponent;
  let fixture: ComponentFixture<DonateFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
