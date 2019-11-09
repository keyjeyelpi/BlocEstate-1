import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreePage } from './step-three.page';

describe('StepThreePage', () => {
  let component: StepThreePage;
  let fixture: ComponentFixture<StepThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
