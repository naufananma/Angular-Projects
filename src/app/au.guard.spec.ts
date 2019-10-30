import { TestBed, async, inject } from '@angular/core/testing';

import { AuGuard } from './au.guard';

describe('AuGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuGuard]
    });
  });

  it('should ...', inject([AuGuard], (guard: AuGuard) => {
    expect(guard).toBeTruthy();
  }));
});
