import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from '@env/environment.prod';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { ContactForm } from '../models/contact-form.model';
import { AlertService } from '@app/services/alert.service';

@Injectable({ providedIn: 'root' })
export class ContactService {

  constructor(public dialog: MatDialog, private http: HttpClient, private alertService: AlertService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      position: {right: '0', top: '0'},
      panelClass: 'app-panel-class',
      height: '895px',
      width: '570px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveContactData(result);
      }
    });
  }

  saveContactData(data: ContactForm) {
    this.sendContactData(data)
      .pipe(
        catchError(err => {
          this.alertService.alert();

          return throwError(err);
      }),
      )
      .subscribe(
        res => {
          this.alertService.alert('Submitted.', false);
        });
  }

  getPosts() {
    return this.http.get(environment.apiURL + 'posts');
  }

  getAllPosts() {
    return this.http.get(environment.apiURL + 'posts');
  }

  sendContactData(data) {
    return this.http.post(environment.apiURL + 'send-contact-data', data);
  }
}
