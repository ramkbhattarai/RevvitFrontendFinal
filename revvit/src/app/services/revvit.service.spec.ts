import { TestBed } from '@angular/core/testing';

import { RevvitService } from './revvit.service';

describe('RevvitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevvitService = TestBed.get(RevvitService);
    expect(service).toBeTruthy();
  });
});
