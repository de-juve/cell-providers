import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MatSnackBarHelperService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(message) {
    this.snackBar.open(
      message,
      '',
      {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
  }
}
