import { TestBed, inject } from '@angular/core/testing';

import { CompanionsService } from './companions.service';

describe('CompanionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanionsService]
    });
  });

  it('should be created', inject([CompanionsService], (service: CompanionsService) => {
    expect(service).toBeTruthy();
  }));
});
