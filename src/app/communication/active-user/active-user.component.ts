import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-user',
  imports: [],
  templateUrl: './active-user.component.html',
  styleUrl: './active-user.component.css'
})
export class ActiveUserComponent {
  @Input() name!:string;
  @Input() age!:string;
  
}
