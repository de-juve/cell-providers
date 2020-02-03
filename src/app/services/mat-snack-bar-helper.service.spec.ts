import { TestBed } from '@angular/core/testing';

import { MatSnackBarHelperService } from './mat-snack-bar-helper.service';

describe('MatSnackBarHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatSnackBarHelperService = TestBed.get(MatSnackBarHelperService);
    expect(service).toBeTruthy();
  });
});
