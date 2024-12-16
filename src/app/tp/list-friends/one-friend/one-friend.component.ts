import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFriendId:number = 1
  oneFriendName :string = "Hervé"
  oneFriendAge:number = 50
  oneFriendStatus :string = "Online"
  oneFriendBio :string = "Le best"
  oneFriendXss :string = "<script>alert('Hello, XSS')</script>"
  getOneFriendStatus (): string {
    return this.oneFriendStatus
  }
}
