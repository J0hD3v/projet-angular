import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [
    NgStyle,
    NgClass,
  ],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFriendId:number = 1
  oneFriendName :string = "Mario"
  oneFriendAge:number = 50
  oneFriendStatus :string = "Online"
  oneFriendBio :string = "Le best"
  oneFriendXss :string = "<script>alert('Hello, XSS')</script>"
  oneFriendImg :string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZ6Vw-Br-RRvMstTlTqbeGXw4PNepXRrTzg&s"

  constructor() {
    this.oneFriendStatus = Math.random() < 0.5 ? "Offline" : "Online"
  }

  getOneFriendStatus (): string {
    return this.oneFriendStatus
  }
  getColor (): string{
    return this.oneFriendStatus == "Online" ? "red" : "blue"
  }
  getClass (): string {
    return this.oneFriendStatus == 'Online' ? 'amiOn' : 'amiOff'
  }
}
