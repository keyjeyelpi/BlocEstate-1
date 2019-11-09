import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOnePage } from './step-one.page';

describe('StepOnePage', () => {
  let component: StepOnePage;
  let fixture: ComponentFixture<StepOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
