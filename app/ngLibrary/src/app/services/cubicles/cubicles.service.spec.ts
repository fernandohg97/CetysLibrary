import { TestBed, inject } from '@angular/core/testing';

import { CubiclesService } from './cubicles.service';

describe('CubiclesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CubiclesService]
    });
  });

  it('should be created', inject([CubiclesService], (service: CubiclesService) => {
    expect(service).toBeTruthy();
  }));
});
