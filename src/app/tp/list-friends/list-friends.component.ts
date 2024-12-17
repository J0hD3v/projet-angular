import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends',
  imports: [
    OneFriendComponent
  ],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  listFriendsAuth:boolean = false
  constructor(){
    setTimeout(() => {
      this.listFriendsAuth = !this.listFriendsAuth;
    }, 3000);
  }

  //question 1
  listFriendsCreationStatus:string="rien"
  updateStatus(): void {
    this.listFriendsCreationStatus = "Félicitations ! 🎁"
  }

  // question 2
  inputCopie:string = "vide"
  onInput(event:Event): void {
    console.log(event);
    this.inputCopie = (<HTMLInputElement>event.target).value
  }
}
