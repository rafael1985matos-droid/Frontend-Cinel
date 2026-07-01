import { TestBed } from '@angular/core/testing';

import { FakeBack } from './fake-back';

describe('FakeBack', () => {
  let service: FakeBack;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeBack);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
