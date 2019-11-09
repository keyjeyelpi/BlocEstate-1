import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilterPage } from './edit-filter.page';

describe('EditFilterPage', () => {
  let component: EditFilterPage;
  let fixture: ComponentFixture<EditFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
