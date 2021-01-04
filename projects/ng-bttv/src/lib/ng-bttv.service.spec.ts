import { TestBed } from '@angular/core/testing';

import { NgBttvService } from './ng-bttv.service';

describe('NgBttvService', () => {
  let service: NgBttvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBttvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
