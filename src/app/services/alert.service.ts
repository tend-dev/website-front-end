import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from '@app/components/custom-snack-bar/custom-snack-bar.component';

@Injectable({ providedIn: 'root' })
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }

  alert(message = 'Fail to save.', isError = true) {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {
      duration: 2000,
      data: { message, isError },
      horizontalPosition: 'start', panelClass: ['white-snackbar'], verticalPosition: 'top'
    });
  }
}
