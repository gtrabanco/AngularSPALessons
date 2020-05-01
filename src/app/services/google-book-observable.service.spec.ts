import { TestBed } from '@angular/core/testing';

import { GoogleBookObservableService } from './google-book-observable.service';

describe('GoogleBookObservableService', () => {
  let service: GoogleBookObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleBookObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
