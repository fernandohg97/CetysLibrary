import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersUpdateComponent } from './admin-users-update.component';

describe('AdminUsersUpdateComponent', () => {
  let component: AdminUsersUpdateComponent;
  let fixture: ComponentFixture<AdminUsersUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
