import { TestBed } from '@angular/core/testing';

import { AddMyCoursesService } from './add-my-courses.service';

describe('AddMyCoursesService', () => {
  let service: AddMyCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMyCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
