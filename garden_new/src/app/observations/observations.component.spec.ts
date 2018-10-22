import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationsPage } from './observations.component';

describe('ObservationsPage', () => {
  let component: ObservationsPage;
  let fixture: ComponentFixture<ObservationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObservationsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
