import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { AlertService } from '@app/services/alert.service';
import { ContactForm } from '@app/models/contact-form.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  data: ContactForm;

  constructor(public dialogRef: MatDialogRef<ContactFormComponent>, private alertService: AlertService) {
    this.cleanData();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cleanData() {
    this.data = new ContactForm();
  }

  checkValidation(invalid: boolean) {
    if (invalid) {
      this.alertService.alert('Form is invalid.', true);
    } else {
      this.dialogRef.close(this.data);
    }
  }
}
