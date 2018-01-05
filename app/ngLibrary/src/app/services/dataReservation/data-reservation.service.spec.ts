import { TestBed, inject } from '@angular/core/testing';

import { DataReservationService } from './data-reservation.service';

describe('DataReservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataReservationService]
    });
  });

  it('should be created', inject([DataReservationService], (service: DataReservationService) => {
    expect(service).toBeTruthy();
  }));
});
