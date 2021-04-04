import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpageComponent } from './addpage.component';

describe('AddpageComponent', () => {
  let component: AddpageComponent;
  let fixture: ComponentFixture<AddpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
