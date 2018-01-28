import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUserDetailsComponent } from './popup-userDetails.component';

describe('PopupUserDetailsComponent', () => {
  let component: PopupUserDetailsComponent;
  let fixture: ComponentFixture<PopupUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
