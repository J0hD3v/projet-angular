import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { FormsModule } from '@angular/forms'; // permet d'utiliser ngModel
import { NgIf } from '@angular/common'; // permet d'utiliser ngIf
import { NgFor } from '@angular/common'; // permet d'utiliser ngFor

@Component({
  selector: 'app-list-friends',
  imports: [
    OneFriendComponent,
    FormsModule,
    NgIf,
    NgFor
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

  // question 1
  listFriendsCreationStatus:string="rien"
  updateStatus(): void {
    this.listFriendCreated = this.uneData != "" ? true : false;
  }

  // avec ngModel
  uneData:string = ""

  // avec ngIf
  listFriendCreated:boolean = false

  // avec ngFor
  listFriendsTab: { name: string; age: number; email: string }[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  ]
}
