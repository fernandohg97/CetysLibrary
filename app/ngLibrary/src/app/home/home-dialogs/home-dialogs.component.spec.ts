import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDialogsComponent } from './home-dialogs.component';

describe('HomeDialogsComponent', () => {
  let component: HomeDialogsComponent;
  let fixture: ComponentFixture<HomeDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
