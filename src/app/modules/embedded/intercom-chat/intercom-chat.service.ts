import { Injectable } from '@angular/core';
import { Intercom } from 'ng-intercom';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class IntercomChatService {

  constructor(
    private intercom: Intercom
  ) { }

  /**
   * Initiate Intercom.io widged
   */
  init() {
    this.intercom.boot({
      app_id: environment.intercomAppId,
      // Supports all optional configuration.
      widget: {
        "activator": "#intercom"
      }
    });
  }
}
