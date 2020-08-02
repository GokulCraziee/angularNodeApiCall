import { TestBed } from '@angular/core/testing';

import { WebRequestHandlerService } from './web-request-handler.service';

describe('WebRequestHandlerService', () => {
  let service: WebRequestHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebRequestHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
