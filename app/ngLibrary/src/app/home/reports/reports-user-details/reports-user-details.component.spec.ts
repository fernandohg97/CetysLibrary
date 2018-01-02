import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsUserDetailsComponent } from './reports-user-details.component';

describe('ReportsUserDetailsComponent', () => {
  let component: ReportsUserDetailsComponent;
  let fixture: ComponentFixture<ReportsUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
