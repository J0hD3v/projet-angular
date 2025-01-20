import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  imports: [
    FormsModule
  ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {

  @Output() notify = new EventEmitter();

  name:string = '';
  age:string = '';

  majData():void {
    this.notify.emit({
      name: this.name,
      age: this.age,
    })
  }
}
