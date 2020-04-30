import { Component, OnInit } from '@angular/core';
import { ContactService } from '@services/contact.service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  constructor(public contactService: ContactService) {}

  openDialog(): void {
    this.contactService.openDialog();
  }

  ngOnInit(): void {
  }

}
