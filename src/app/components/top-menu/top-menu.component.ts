import { Component, OnInit } from '@angular/core';
import { ContactService } from '@services/contact.service';
import { MatDialog } from '@angular/material/dialog';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  constructor(public contactService: ContactService, public dialog: MatDialog) {}

  openDialog(): void {
    this.contactService.openDialog();
  }

  openModalMenu(): void {
    const dialogRef = this.dialog.open(MobileMenuComponent, {
      position: {right: '0', top: '0'},
      panelClass: 'app-mobile-menu-class',
      width: '100%',
      maxWidth: '100%',
    });
  }
}
