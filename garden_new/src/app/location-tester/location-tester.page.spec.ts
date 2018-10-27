import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTesterPage } from './location-tester.page';

describe('LocationTesterPage', () => {
  let component: LocationTesterPage;
  let fixture: ComponentFixture<LocationTesterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTesterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTesterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
