import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCubiclesComponent } from './admin-cubicles.component';

describe('AdminCubiclesComponent', () => {
  let component: AdminCubiclesComponent;
  let fixture: ComponentFixture<AdminCubiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCubiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCubiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
