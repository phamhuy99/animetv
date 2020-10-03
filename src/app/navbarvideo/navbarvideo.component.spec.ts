import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarvideoComponent } from './navbarvideo.component';

describe('NavbarvideoComponent', () => {
  let component: NavbarvideoComponent;
  let fixture: ComponentFixture<NavbarvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
