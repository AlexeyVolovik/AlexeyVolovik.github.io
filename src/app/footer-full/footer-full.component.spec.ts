import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFullComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterFullComponent;
  let fixture: ComponentFixture<FooterFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
