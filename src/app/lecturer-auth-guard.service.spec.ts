import { TestBed } from '@angular/core/testing';

import { LecturerAuthGuardService } from './lecturer-auth-guard.service';

describe('LecturerAuthGuardService', () => {
  let service: LecturerAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturerAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
