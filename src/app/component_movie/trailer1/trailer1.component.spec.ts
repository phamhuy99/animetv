import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trailer1Component } from './trailer1.component';

describe('Trailer1Component', () => {
  let component: Trailer1Component;
  let fixture: ComponentFixture<Trailer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trailer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trailer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
