import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFullComponent } from './media-full.component';

describe('MediaFullComponent', () => {
  let component: MediaFullComponent;
  let fixture: ComponentFixture<MediaFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
