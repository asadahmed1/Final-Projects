import { TestBed, inject } from '@angular/core/testing';

import { RoomreservationService } from './roomreservation.service';

describe('RoomreservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomreservationService]
    });
  });

  it('should be created', inject([RoomreservationService], (service: RoomreservationService) => {
    expect(service).toBeTruthy();
  }));
});
