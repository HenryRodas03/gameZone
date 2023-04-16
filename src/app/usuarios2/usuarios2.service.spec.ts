import { TestBed } from '@angular/core/testing';

import { Usuarios2Service } from './usuarios2.service';

describe('Usuarios2Service', () => {
  let service: Usuarios2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usuarios2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
