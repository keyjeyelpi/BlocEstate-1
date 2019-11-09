import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoPage } from './step-two.page';

describe('StepTwoPage', () => {
  let component: StepTwoPage;
  let fixture: ComponentFixture<StepTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
