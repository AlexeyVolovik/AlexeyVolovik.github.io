import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFullComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderFullComponent;
  let fixture: ComponentFixture<HeaderFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
