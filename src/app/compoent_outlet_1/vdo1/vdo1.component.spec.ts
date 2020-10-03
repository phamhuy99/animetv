import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vdo1Component } from './vdo1.component';

describe('Vdo1Component', () => {
  let component: Vdo1Component;
  let fixture: ComponentFixture<Vdo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vdo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vdo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
