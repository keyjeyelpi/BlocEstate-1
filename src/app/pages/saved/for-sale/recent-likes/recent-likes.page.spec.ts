import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentLikesPage } from './recent-likes.page';

describe('RecentLikesPage', () => {
  let component: RecentLikesPage;
  let fixture: ComponentFixture<RecentLikesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentLikesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentLikesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
