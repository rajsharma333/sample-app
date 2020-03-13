import { TestBed } from '@angular/core/testing';

import { EmplyeeListService } from './emplyee-list.service';

describe('EmplyeeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmplyeeListService = TestBed.get(EmplyeeListService);
    expect(service).toBeTruthy();
  });
});
