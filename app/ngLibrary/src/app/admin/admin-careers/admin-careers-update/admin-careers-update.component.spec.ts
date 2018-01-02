import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCareersUpdateComponent } from './admin-careers-update.component';

describe('AdminCareersUpdateComponent', () => {
  let component: AdminCareersUpdateComponent;
  let fixture: ComponentFixture<AdminCareersUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCareersUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCareersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
