import { Component, OnInit } from '@angular/core';
import { ContactService } from '@services/contact.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  constructor(public contactService: ContactService) {}

  openDialog(): void {
    this.contactService.openDialog();
  }

  openModalMenu(): void {
    console.log('Open modal menu');
  }
}
