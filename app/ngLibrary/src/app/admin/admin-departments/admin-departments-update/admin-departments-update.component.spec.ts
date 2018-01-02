import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartmentsUpdateComponent } from './admin-departments-update.component';

describe('AdminDepartmentsUpdateComponent', () => {
  let component: AdminDepartmentsUpdateComponent;
  let fixture: ComponentFixture<AdminDepartmentsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDepartmentsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDepartmentsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
