import { TestBed } from '@angular/core/testing';

import { RecetasFirebaseService } from './recetas-firebase.service';

describe('ContactosFirebaseService', () => {
  let service: RecetasFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});