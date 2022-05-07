import { TestBed } from '@angular/core/testing';

import { SubBreedsService } from './sub-breeds.service';

describe('SubBreedsService', () => {
  let service: SubBreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubBreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
