import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObservPage } from './add-observ.page';

describe('AddObservPage', () => {
  let component: AddObservPage;
  let fixture: ComponentFixture<AddObservPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObservPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObservPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
