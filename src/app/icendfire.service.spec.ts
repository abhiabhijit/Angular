import { TestBed, inject } from '@angular/core/testing';

import { IcendfireService } from './icendfire.service';

describe('IcendfireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IcendfireService]
    });
  });

  it('should be created', inject([IcendfireService], (service: IcendfireService) => {
    expect(service).toBeTruthy();
  }));
});
