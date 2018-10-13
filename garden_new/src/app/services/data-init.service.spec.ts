import { TestBed, inject } from '@angular/core/testing';

import { DataInitService } from './data-init.service';

describe('DataInitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataInitService]
    });
  });

  it('should be created', inject([DataInitService], (service: DataInitService) => {
    expect(service).toBeTruthy();
  }));
});
