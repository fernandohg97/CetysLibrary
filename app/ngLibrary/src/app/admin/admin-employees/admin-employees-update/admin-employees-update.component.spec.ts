import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeesUpdateComponent } from './admin-employees-update.component';

describe('AdminEmployeesUpdateComponent', () => {
  let component: AdminEmployeesUpdateComponent;
  let fixture: ComponentFixture<AdminEmployeesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
