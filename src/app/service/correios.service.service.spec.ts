import { TestBed } from '@angular/core/testing';

import { CorreiosServiceService } from './correios.service.service';

describe('CorreiosServiceService', () => {
  let service: CorreiosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorreiosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
