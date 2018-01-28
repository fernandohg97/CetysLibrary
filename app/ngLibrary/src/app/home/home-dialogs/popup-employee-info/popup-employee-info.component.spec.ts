import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEmployeeInfoComponent } from './popup-employee-info.component';

describe('PopupEmployeeInfoComponent', () => {
  let component: PopupEmployeeInfoComponent;
  let fixture: ComponentFixture<PopupEmployeeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupEmployeeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
