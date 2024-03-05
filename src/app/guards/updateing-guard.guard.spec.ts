import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { updateingGuardGuard } from './updateing-guard.guard';

describe('updateingGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => updateingGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
