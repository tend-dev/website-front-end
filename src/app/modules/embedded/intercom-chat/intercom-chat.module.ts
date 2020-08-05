import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntercomModule } from 'ng-intercom';
import { environment } from '@env/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntercomModule.forRoot({
      appId: environment.intercomAppId, // from your Intercom config
      updateOnRouterChange: true // will automatically run `update` on router event changes. Default: `false`
    })
  ]
})
export class IntercomChatModule { }
