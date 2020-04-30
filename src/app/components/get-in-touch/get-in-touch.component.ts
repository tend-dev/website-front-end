import { Component, OnInit } from '@angular/core';
import { ContactService } from '@services/contact.service';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  constructor(public contactService: ContactService) {}

  openDialog(): void {
    this.contactService.openDialog();
  }

  ngOnInit(): void {
  }

}
