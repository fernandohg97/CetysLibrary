import { TestBed, inject } from '@angular/core/testing';

import { ExternalUserService } from './external-user.service';

describe('ExternalUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalUserService]
    });
  });

  it('should be created', inject([ExternalUserService], (service: ExternalUserService) => {
    expect(service).toBeTruthy();
  }));
});
