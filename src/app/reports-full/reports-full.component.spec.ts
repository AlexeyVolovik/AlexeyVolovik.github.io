import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsFullComponent } from './reports-full.component';

describe('ReportsFullComponent', () => {
  let component: ReportsFullComponent;
  let fixture: ComponentFixture<ReportsFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
