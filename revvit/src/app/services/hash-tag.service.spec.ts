import { TestBed } from '@angular/core/testing';

import { HashTagService } from './hash-tag.service';

describe('HashTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HashTagService = TestBed.get(HashTagService);
    expect(service).toBeTruthy();
  });
});
