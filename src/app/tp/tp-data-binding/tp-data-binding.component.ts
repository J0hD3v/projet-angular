import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // permet le 2 way binding avec ngModel

@Component({
  selector: 'app-tp-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './tp-data-binding.component.html',
  styleUrl: './tp-data-binding.component.css'
})
export class TPDataBindingComponent {
  userName:string = "Dingo"
  reset():void {
    this.userName = ""
  }
}
