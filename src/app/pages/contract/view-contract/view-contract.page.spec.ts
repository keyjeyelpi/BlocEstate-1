import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContractPage } from './view-contract.page';

describe('ViewContractPage', () => {
  let component: ViewContractPage;
  let fixture: ComponentFixture<ViewContractPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContractPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
