import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBttvComponent } from './ng-bttv.component';

describe('NgBttvComponent', () => {
  let component: NgBttvComponent;
  let fixture: ComponentFixture<NgBttvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBttvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBttvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
