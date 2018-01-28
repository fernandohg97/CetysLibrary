import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBorrowedMaterialComponent } from './popup-borrowed-material.component';

describe('PopupBorrowedMaterialComponent', () => {
  let component: PopupBorrowedMaterialComponent;
  let fixture: ComponentFixture<PopupBorrowedMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupBorrowedMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupBorrowedMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
