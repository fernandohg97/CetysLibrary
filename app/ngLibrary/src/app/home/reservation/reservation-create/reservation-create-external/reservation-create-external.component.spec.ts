import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCreateExternalComponent } from './reservation-create-external.component';

describe('ReservationCreateExternalComponent', () => {
  let component: ReservationCreateExternalComponent;
  let fixture: ComponentFixture<ReservationCreateExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationCreateExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCreateExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
