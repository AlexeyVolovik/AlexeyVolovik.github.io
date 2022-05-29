import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFullComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutFullComponent;
  let fixture: ComponentFixture<AboutFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
