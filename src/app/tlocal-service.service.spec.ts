import { TestBed } from '@angular/core/testing';

import { TlocalServiceService } from './tlocal-service.service';

describe('TlocalServiceService', () => {
  let service: TlocalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TlocalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
