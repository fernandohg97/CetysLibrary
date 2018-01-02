import { TestBed, inject } from '@angular/core/testing';

import { Users.QuantityService } from './users.quantity.service';

describe('Users.QuantityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Users.QuantityService]
    });
  });

  it('should be created', inject([Users.QuantityService], (service: Users.QuantityService) => {
    expect(service).toBeTruthy();
  }));
});
