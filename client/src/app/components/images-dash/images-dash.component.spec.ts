import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesDashComponent } from './images-dash.component';

describe('ImagesDashComponent', () => {
  let component: ImagesDashComponent;
  let fixture: ComponentFixture<ImagesDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
