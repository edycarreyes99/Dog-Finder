import { TestBed } from '@angular/core/testing';

import { BreedImagesService } from './breed-images.service';

describe('BreedImagesService', () => {
  let service: BreedImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
