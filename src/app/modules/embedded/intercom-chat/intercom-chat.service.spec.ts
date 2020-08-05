import { TestBed } from '@angular/core/testing';

import { IntercomChatService } from './intercom-chat.service';

describe('IntercomChatService', () => {
  let service: IntercomChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercomChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
