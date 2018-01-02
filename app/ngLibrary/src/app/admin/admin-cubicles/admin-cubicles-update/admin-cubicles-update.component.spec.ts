import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCubiclesUpdateComponent } from './admin-cubicles-update.component';

describe('AdminCubiclesUpdateComponent', () => {
  let component: AdminCubiclesUpdateComponent;
  let fixture: ComponentFixture<AdminCubiclesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCubiclesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCubiclesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
