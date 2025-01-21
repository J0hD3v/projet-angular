import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe } from '@angular/core';

@Pipe ({
  name: 'reverseText',
})
export class ReverseText {
  transform(value: string): string {
    return value.split("").reverse().join("");
  }
}

@Pipe ({
  name: 'funText',
})
export class FunText {
  transform(value: string): string {
    return value != "" ? ("😄 " + value + " 😄") : "";
  }
}

@Component({
  selector: 'app-pipes',
  imports: [FormsModule,CommonModule,ReverseText,FunText],
  templateUrl: './pipes.component.html',
  // styleUrl: './pipes.component.css'
  template:`

  `,
  styles:[`
      .container {
      max-width: 800px;
    }
    .badge {
      float: right;
    }`]
})

export class PipesComponent {
  currentDate: Date = new Date();
  exampleText: string = 'Angular Pipes';
  productPrice: number = 1234.56;
  decimalValue: number = 42.56789;
  jsonData = { name: 'Angular', version: 19 };
  interactiveText: string = 'Hello, Angular!';

  sampleText: string = 'Angular Pipes';
  customText: string = '';
  customPrice: number = 0;
}