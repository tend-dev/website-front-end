import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactService } from '@app/services/contact.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactFormComponent>, public contactService: ContactService) {
  }

  openDialog(): void {
    this.contactService.openDialog();
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
