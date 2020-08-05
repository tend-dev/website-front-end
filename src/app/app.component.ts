import { Component } from '@angular/core';
import { IntercomChatService } from './modules/embedded/intercom-chat/intercom-chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private intercomChatService: IntercomChatService
  ) { }

  ngOnInit() {
    this.intercomChatService.init();
  }
}
