import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vdo3Component } from './vdo3.component';

describe('Vdo3Component', () => {
  let component: Vdo3Component;
  let fixture: ComponentFixture<Vdo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vdo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vdo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
