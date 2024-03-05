import { TestBed } from '@angular/core/testing';

import { ProductTestService } from './product-test.service';

describe('ProductTestService', () => {
  let service: ProductTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
