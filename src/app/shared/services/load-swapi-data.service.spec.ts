import {TestBed} from '@angular/core/testing';

import {LoadSwapiDataService} from './load-swapi-data.service';

describe('LoadSwapiDataService', () => {
  let service: LoadSwapiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadSwapiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
