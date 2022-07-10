import { TestBed } from '@angular/core/testing';

import { MatchResultService } from './match-result.service';

describe('MatchResultService', () => {
  let service: MatchResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
