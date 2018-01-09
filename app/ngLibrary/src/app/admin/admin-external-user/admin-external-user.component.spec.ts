import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExternalUserComponent } from './admin-external-user.component';

describe('AdminExternalUserComponent', () => {
  let component: AdminExternalUserComponent;
  let fixture: ComponentFixture<AdminExternalUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExternalUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExternalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
