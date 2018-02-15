import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfirmElementComponent } from './popup-confirm-element.component';

describe('PopupConfirmElementComponent', () => {
  let component: PopupConfirmElementComponent;
  let fixture: ComponentFixture<PopupConfirmElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupConfirmElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupConfirmElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
