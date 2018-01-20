import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExternalUserUpdateComponent } from './admin-external-user-update.component';

describe('AdminExternalUserUpdateComponent', () => {
  let component: AdminExternalUserUpdateComponent;
  let fixture: ComponentFixture<AdminExternalUserUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExternalUserUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExternalUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
