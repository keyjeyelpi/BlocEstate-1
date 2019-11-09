import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDevelopersPage } from './about-developers.page';

describe('AboutDevelopersPage', () => {
  let component: AboutDevelopersPage;
  let fixture: ComponentFixture<AboutDevelopersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDevelopersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDevelopersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
