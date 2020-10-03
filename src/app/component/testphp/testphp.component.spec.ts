import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestphpComponent } from './testphp.component';

describe('TestphpComponent', () => {
  let component: TestphpComponent;
  let fixture: ComponentFixture<TestphpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestphpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestphpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
