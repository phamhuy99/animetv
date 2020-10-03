import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotovideoComponent } from './videotovideo.component';

describe('VideotovideoComponent', () => {
  let component: VideotovideoComponent;
  let fixture: ComponentFixture<VideotovideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideotovideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotovideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
