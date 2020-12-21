import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { ContactForm } from '../models/contact-form.model';
import { AlertService } from '@app/services/alert.service';
// import { MobileMenuComponent } from '@app/components/mobile-menu/mobile-menu.component';

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

  sendContactData(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer cd66bf825799d2cd127e640a5767cfeb',
        'Content-Type' : 'text/plain'
      })
    };    
    return this.http.post('https://recommend.careof.com.au/api/1.1/wf/SendEmail?to=woods@ustwo.com&subject=TendContactForm&content=' + JSON.stringify(data), httpOptions);
  }
}
