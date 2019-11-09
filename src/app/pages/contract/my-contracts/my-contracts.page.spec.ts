import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContractsPage } from './my-contracts.page';

describe('MyContractsPage', () => {
  let component: MyContractsPage;
  let fixture: ComponentFixture<MyContractsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContractsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
