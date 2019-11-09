import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSixPage } from './step-six.page';

describe('StepSixPage', () => {
  let component: StepSixPage;
  let fixture: ComponentFixture<StepSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepSixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
