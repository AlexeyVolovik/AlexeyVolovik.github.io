import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMobileComponent } from './media-mobile.component';

describe('MediaMobileComponent', () => {
  let component: MediaMobileComponent;
  let fixture: ComponentFixture<MediaMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
