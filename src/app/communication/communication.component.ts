import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserDataComponent } from './user-data/user-data.component';
import { ActiveUserComponent } from './active-user/active-user.component';

@Component({
  selector: 'app-communication',
  imports: [
    UserDataComponent,
    ActiveUserComponent
  ],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
  name:string = 'Josiane';
  age:string = 'Pichet';

  notifyChildComponent(data:any):void {
    this.name = data.name;
    this.age = data.age;
  }
}
