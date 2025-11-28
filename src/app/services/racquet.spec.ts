import { TestBed } from '@angular/core/testing';

import { Racquet } from './racquet';

describe('Racquet', () => {
  let service: Racquet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Racquet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
