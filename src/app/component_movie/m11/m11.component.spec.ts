import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M11Component } from './m11.component';

describe('M11Component', () => {
  let component: M11Component;
  let fixture: ComponentFixture<M11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
