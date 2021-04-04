import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleftmenuComponent } from './addleftmenu.component';

describe('AddleftmenuComponent', () => {
  let component: AddleftmenuComponent;
  let fixture: ComponentFixture<AddleftmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddleftmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddleftmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
