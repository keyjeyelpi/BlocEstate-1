import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFivePage } from './step-five.page';

describe('StepFivePage', () => {
  let component: StepFivePage;
  let fixture: ComponentFixture<StepFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
