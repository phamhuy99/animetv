import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M10Component } from './m10.component';

describe('M10Component', () => {
  let component: M10Component;
  let fixture: ComponentFixture<M10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
