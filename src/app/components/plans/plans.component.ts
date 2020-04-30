import { Component, OnInit } from '@angular/core';
import { ContactService } from '@services/contact.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  constructor(public contactService: ContactService) {}

  openDialog(): void {
    this.contactService.openDialog();
  }

  ngOnInit(): void {
  }

}
