// chatbox.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatboxService {
  public isVisible: boolean = false;

  toggleChatbox() {
    this.isVisible = !this.isVisible;
  }
}
