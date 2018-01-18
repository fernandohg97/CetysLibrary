import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupExternalInfoComponent } from './popup-external-info.component';

describe('PopupExternalInfoComponent', () => {
  let component: PopupExternalInfoComponent;
  let fixture: ComponentFixture<PopupExternalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupExternalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupExternalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
