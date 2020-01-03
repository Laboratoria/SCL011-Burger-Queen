import { TestBed } from '@angular/core/testing';

import { WaiqueenService } from './waiqueen.service';

describe('WaiqueenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaiqueenService = TestBed.get(WaiqueenService);
    expect(service).toBeTruthy();
  });
});
